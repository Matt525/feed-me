import React from 'react';
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import users from '../../users';

const TextBlock = styled(Link)`
  display: flex;

  &:hover .user--name {
    text-decoration: underline;
  }

  .user {
    &--name {
      color: white;
      font-weight: bold;
    }
    &--id {
      margin-left: 5px;
      color: #777;
    }
  }
  .tweet-date {
    margin-left: 15px;
    color: #777;
    position: relative;

    &::after {
      content: '';
      width: 2px;
      height: 2px;
      background-color: #777;
      position: absolute;
      left: -8px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }
`
export default function TweetActorName({name, id, time}) { 
  // difference in time between the current time and the time passed in as time prop.
const timeDiff = Daten.now() - new Date(time).getTime();
// Setting variables to check if the timeDiff is less than 24 hours or less than 1 hr
const lessThan24hrs = timeDiff / (60 * 60 * 1000) < 24;
const lessThan1hr = timeDiff / (60 * 60 * 1000) < 1;
// timeText returns will display minutes or hours if it's less thatn 24 hrs or less than 1hr. If neither, displays the date.
const timeText = lessThan24hrs ? (lessThan1hr ? `${format(timeDiff, 'm')}m` : `${format(timeDiff, 'H')}h`) : format(new Date(time), 'MMM d');
 
  return(
    <TextBlock to={`/${id}`}>
      <span className="user--name">{name}</span>
      <span className="user--id">@{id}</span>
      <span className="tweet-date">{timeText}</span>
    </TextBlock>
  )


}