import React, { Component } from 'react';


class ProfileCreds extends Component {
    state = {  }
    render() { 
        const { experience, education } = this.props;

        const expItems = experience.map(exp => 
            <li key={exp.id} className="list-group-item">
                <h4>{exp.company}</h4>
                <p> {exp.from} - {exp.to === '' ? ('now') : exp.to } </p>
                <p><strong>Position:  </strong>{exp.title}</p>
                <p>{exp.location === ''? null : (<span><strong>Location:  </strong>{ exp.location }</span>)}</p>
                <p>{exp.description === ''? null : (<span><strong>Description:  </strong>{ exp.description }</span>)}</p>
            </li> 
            )

        const eduItems = education.map(edu => 
            <li key={edu.id} className="list-group-item">
                <h4>{edu.school}</h4>
                <p> {edu.from} - {edu.to === null ? ('now') : edu.to } </p>
                <p><strong>Degree:  </strong>{edu.degree}</p>
                <p><strong>Field Of Study:  </strong>{edu.fieldofstudy}</p>
                <p>{edu.description === ''? null : (<span><strong>Description: </strong>{edu.description}</span>)}</p>
            </li> 
            )

        return ( 
            <div>
            <div className="row">
                 <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    { expItems.length > 0 ? (
                        <ul className="list-group">{expItems}</ul>
                    ): (<p className="text-center">No Experience Listed.</p>)
                }
                 </div>
                 <div className="col-md-6">
                    <h3 className="text-center text-info">Education</h3>
                    { eduItems.length > 0 ? (
                        <ul className="list-group">{eduItems}</ul>
                    ): (<p className="text-center">No Experience Listed.</p>)
                }
                 </div>
            </div>

            </div>
         );
    }
}
 
export default ProfileCreds;