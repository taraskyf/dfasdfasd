import React from 'react';
import s from './News.module.css';
import {addNewsCreator, updateNewsCreator} from "../../redax/state";

const News = (props) => {
  let firstNews = props.store._state.newsPage.upNews;
  const text = props.store._state.newsPage.news;

  const onNewNewsChange = (e) => {
      let body = e.target.value
      props.dispatch(updateNewsCreator(body))
  }
  const onSendNews = () => {
      props.dispatch(addNewsCreator())
  }


    return (
        <div>
            News content
            <img src="https://klike.net/uploads/posts/2019-03/1551772531_1.jpg"/>
            <div>
                { firstNews }
            </div>
            <div>
                <div>
                    <textarea onChange={ onNewNewsChange}
                        value={text}
                        placeholder={"Enter News ..."}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendNews}>Add News</button>
                </div>
            </div>
        </div>
    )
}


export default News;