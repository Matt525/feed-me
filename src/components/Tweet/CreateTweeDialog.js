import useTweet from '../../hooks/useTweet'


export default function CreateTweetDialog({ onClickOutside }) {
    const { createTweet } = useTweet()
  
    const onSubmit = async (text) => {
      createTweet(text)
  
      onClickOutside()
    }
  
    return // the UI
  }