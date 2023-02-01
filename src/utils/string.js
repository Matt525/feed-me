export function formatStringWithLink(text, linkClass, noLink = false) {
    // regex to match links, hashtags and mentions
    const regex = /((https?:\/\/\S*)|(#\S*))|(@\S*)/gi
  
    // Cache the value of noLink to a variable
    const isNoLink = noLink;
  
    const modifiedText = text.replace(regex, (match) => {
      let url, label
  
      if (match.startsWith('#')) {
        // it is a hashtag
        url = match
        label = match
      } else if (match.startsWith('@')) {
        // it is a mention
        url = `/${match.replace('@', '')}`
        label = match
      } else {
        // it is a link
        url = match
        label = url.replace('https://', '')
      }
  
      // Use template literals for easier and more readable string concatenation
      return `<${isNoLink ? 'span' : 'a'} class="${isNoLink ? '' : linkClass}" href="${url}">${label}</${isNoLink ? 'span' : 'a'}>`
    })
  
    return modifiedText
  }
  

  /// Using this code to return an HTML string that can be embedded into an element. 