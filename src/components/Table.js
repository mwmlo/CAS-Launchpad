import React from 'react'
import db from "../firebase"

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        };
    }

    componentDidMount() {
        db.collection("experiences")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data);
                this.setState({ experiences: data })
            });
    }

    render() {

        let experiences = this.state.experiences

        return (
            <div className="table">
                {experiences.map(experience => (
                    <div className="experience">
                        <div>
                            <h2>{experience.name}</h2>
                            <a href={experience.link}>{experience.desc}</a>
                        </div>
                        <div className="properties">
                            {experience.tags.map(tag => (
                                <h5 id={tag}>{tag}</h5>
                            ))}
                            {experience.subjects !== undefined &&
                                <h5 id="subjects">{experience.subjects}</h5>
                            }
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Table;
