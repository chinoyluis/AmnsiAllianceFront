import React from "react";
import styled from "styled-components"

export default function ErrorNotice(props) {
  const ErrorNoticeDiv = styled.div`
      min-width: 350px;
      margin: 1rem auto;
      padding: 0.5rem;
      border: 1px solid #e07c7c;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f8d6d6;
      width: 50%;
      button {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #df4343;
      color: #ffffff;
      }
    `
  return (

    
    <ErrorNoticeDiv>
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </ErrorNoticeDiv>
  );
}
