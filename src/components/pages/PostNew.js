import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { data } from "jquery";

export default class PostNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      desc: "",
      content: ""
    };
  }

  handleChange = (e) => {
    const stateName = e.target.name;
    const value = e.target.value;

    this.setState({[stateName]: value});
  }

  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementById('image').files[0]

    d.append('image', e)
    console.log("dataImage", data.get("image"))

    r.open('POST', 'https://api.imgur.com/3/image', true)
    r.setRequestHeader('Authorization', 'Client-ID 6c188ff0164b4a8')
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        console.log("res", res)

        this.setState({image: res.data.link})
      }
    }
    r.send(d)
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" onChange={e => this.handleChange(e)} name="name" value={this.state.name} className="form-control" id="title" placeholder="Title" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="image">Image link</label>
          <input name="image" onChange={this.uploadImage} type="file" className="form-control" id="image" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="desc">Desc</label>
          <input type="text" onChange={e => this.handleChange(e)} name="desc" value={this.state.desc} className="form-control" id="desc" placeholder="Desc" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <SimpleMDE
            options={{
              showIcons: [
                'code',
                'table',
                'heading-2',
                'heading-3',
                'clean-block',
                'horizontal-rule'
              ],
              hideIcons: [
                'guide', 'side-by-side'
              ]
            }}
          />
        </div>
      </form>
    );
  }
}