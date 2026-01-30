const display = document.getElementById('app')
const form = document.getElementById('form')


async function fetchData() {
  const response = await fetch(`http://localhost:4242/guestbook`)
  const messages = await response.json()

  console.log(messages)

  return messages
}



async function displayMessages() {
  const messages = await fetchData()

  messages.forEach((message) => {
    const entry = document.createElement('div')
    entry.className = "entry"
    const userName = document.createElement('p')
    userName.className = "entry-name"

    const messageContent = document.createElement('p')
    messageContent.className = "entry-message"


    userName.textContent = message.guest_name
    messageContent.textContent = message.content

    entry.append(userName, messageContent)

    display.appendChild(entry)
  })
}
displayMessages()


async function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(form)
  const userInput = Object.fromEntries(formData)
  const userInputJSON = JSON.stringify(userInput)

  const response = await fetch(`http://localhost:4242/guestbook`, {
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST",
    body: userInputJSON
  })
  window.location.reload()
} 

form.addEventListener('submit', handleSubmit)