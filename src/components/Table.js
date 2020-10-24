import React from "react";
import db from "../firebase";

class Table extends React.PureComponent {
  state = {
    database: [],
    experiences: [],
  };

  componentDidMount() {
    db.collection("experiences")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ database: data, experiences: data });
      });
  }

  updateTable() {
    let database = this.state.database;
    let inputQuery = this.props.query;
    let queriedExperiences = [];

    for (var entry in database) {
      let properties = [];
      let databaseExp = database[entry];

      for (var tag in databaseExp["tags"]) {
        let queryTag = databaseExp["tags"][tag];
        properties.push(queryTag);
      }

      properties.push(databaseExp["subjects"]);

      for (var property in properties) {
        for (var label in inputQuery) {
          let inputLabel = inputQuery[label];
          if (properties[property] === inputLabel) {
            queriedExperiences.push(databaseExp);
          }
        }
      }
    }

    if (inputQuery.length < 1) {
      queriedExperiences = database;
    }

    const uniqueExp = [...new Set(queriedExperiences)];

    this.setState({ experiences: uniqueExp });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateTable();
    }
  }

  render() {
    let experiences = this.state.experiences;

    return (
      <div className="table">
        {experiences.map((experience, index) => (
          <div className="experience" key={index}>
            <div className="exp-name">
              <h2>{experience.name}</h2>
              <a href={experience.link}>{experience.desc}</a>
            </div>
            <div className="properties">
              {experience.tags.map((tag, index) => (
                <h5 id={tag} key={index}>
                  {tag}
                </h5>
              ))}
              {experience.subjects !== undefined && (
                <h5 id="subjects">{experience.subjects}</h5>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Table;
