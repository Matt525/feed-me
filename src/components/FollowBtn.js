import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { useState } from "react";

const follow = styled.h1`
    background: #444;
    color: #fff;
    text-align: center;
`

function FollowBtn(){ 
    return(
            <container>
                <button>
                    {following ?           
                    <div className="follow-text">
                        <span className="follow-text__following">Following</span>
                        <span className="follow-text__unfollow">Unfollow</span>
                    </div> : 'follow'}
                </button>
            </container>
    )
}