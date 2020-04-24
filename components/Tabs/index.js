// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

  function addTopics() {
    const topicsContainer = document.querySelector('.topics')

    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
      response.data.topics.map(topic => {
        const newTopic = createTopic(topic)
        topicsContainer.appendChild(newTopic)
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  function createTopic(topicName) {
    const newTopic = document.createElement('div')
    newTopic.classList.add('tab')
    newTopic.innerText = topicName
    return newTopic
  }

  addTopics()
