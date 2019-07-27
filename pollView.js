import React from "react";
import pic from "./images/pic.png";

import "./pollView.css";

let list = [
  {
    fName: "Kwame Jones",
    uName: "KJones",
    aVatar: "./pic.png",
    pQuestion: "What is your favorite Avengers movie?",
    objectID: 0,
    options: {
      option1: "Age of Ultron",
      option2: "Infinty War",
      option3: "End Game"
    }
  },
  {
    fName: "Marlon Wayans",
    uName: "MWayans",
    aVatar: "./pic.png",
    pQuestion: "What is on your to do list today?",
    objectID: 1,
    options: {
      option1: "Sleeping",
      option2: "Spend time with family",
      option3: "Go see a movie"
    }
  }
];

class PollView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    };

    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="RoadtoReact">
        <h1 className="title" style={{ textAlign: "center" }}>
          {this.props.title}
        </h1>
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <div className="container col-md-5">
              <div className="row">
                <div className="col">
                  <div className="card-group">
                    <div className="card shadow p-2 border-0">
                      <div className="card-header border-0 ">
                        <div className="media ">
                          <img
                            src={pic}
                            className="mr-2 image rounded-circle"
                            alt="..."
                          />
                          <div className="media-body">
                            <h5 className="mb-0">{item.fName}</h5>
                            <figcaption className="figure-caption one">
                              @{item.uName}
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item.pQuestion}</h5>

                        <form id="vote-poll">
                          <div>
                            <input
                              type="radio"
                              name="poll"
                              id="option1"
                              value="Option1"
                            />
                            <label for="Option1">{item.options.option1}</label>
                          </div>

                          <div>
                            <input
                              type="radio"
                              name="poll"
                              id="option2"
                              value="Option2"
                            />
                            <label for="Option2">{item.options.option2}</label>
                          </div>

                          <div>
                            <input
                              type="radio"
                              name="poll"
                              id="option3"
                              value="Option3"
                            />
                            <label for="Option3">{item.options.option3}</label>
                          </div>

                          <br />

                          <div className=" border-0 form-check-inline">
                            <button className="btn btn-info mr-2" type="submit">
                              Vote
                            </button>
                            <figcaption className="figure-caption one">
                              <small className="text-muted"> 4 votes</small>
                            </figcaption>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PollView;
