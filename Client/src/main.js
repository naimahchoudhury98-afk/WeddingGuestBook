const display = document.getElementById("app")
const form = document.getElementById("form")

async function fetchMessages() {
  const response = await fetch("http://localhost:4242/guestbook")
  const messages = await response.json()
  return messages
}

async function displayMessages() {
  display.innerHTML = ""

  const messages = await fetchMessages()

  messages.forEach((message) => {
    const entry = document.createElement("div")
    entry.className = "entry"

    const userName = document.createElement("p")
    userName.className = "entry-name"
    userName.textContent = message.guest_name

    const messageContent = document.createElement("p")
    messageContent.className = "entry-message"
    messageContent.textContent = message.content

    const deleteButton = document.createElement("button")
    deleteButton.className = "delete-button"
    deleteButton.textContent = "Delete"

    deleteButton.addEventListener("click", async () => {
      await fetch(`http://localhost:4242/guestbook/${message.id}`, {
        method: "DELETE"
      })

      displayMessages()
    })

    entry.append(userName, messageContent, deleteButton)
    display.appendChild(entry)
  })
}

displayMessages()

async function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(form)
  const userInput = Object.fromEntries(formData)

  await fetch("http://localhost:4242/guestbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInput)
  })

  form.reset()
  displayMessages()
}

form.addEventListener("submit", handleSubmit)
