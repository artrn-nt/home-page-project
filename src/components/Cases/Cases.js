import React, { forwardRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Case from './Case/Case';
import casesStyles from '../../styles/components/cases.module.scss';

function Cases(props, ref) {

    const { case1Ref, case2Ref, case3Ref } = ref;

    const data = useStaticQuery(graphql`
        query Images {
            images:   allFile(
                filter: {
                absolutePath: {regex: "/(gallery)/"}, 
                extension: {regex: "/(jpg)|(jpeg)|(png)/"}}, 
                sort: {fields: name, order: ASC}) {
                    nodes {
                        name
                        id
                        childImageSharp {
                            fixed(quality: 100, width: 384, height: 256) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
        }
    `);

    const dataNodes = data.images.nodes;

    const handleNodes = () => {

        const norwayPic = [];
        const montanaPic = [];
        const icelandPic = [];

        for (const i in dataNodes) {
            if (dataNodes[i].name.includes('norway')) {
                norwayPic.push(dataNodes[i]);
            } else if (dataNodes[i].name.includes('montana')) {
                montanaPic.push(dataNodes[i]);
            } else if (dataNodes[i].name.includes('iceland')) {
                icelandPic.push(dataNodes[i]);
            }
        }

        return [norwayPic, montanaPic, icelandPic];
    }

    const restructuredDataNodes = handleNodes();

    const casesStringData = [
        {
            slogan: 'Discover magnificent',
            country: 'NORWAY',
            contact: 'Contact - our Norway guide.',
            guide: 'Lisa'
        },
        {
            slogan: 'Explore beautiful',
            country: 'MONTANA STATE',
            contact: 'Get in touch with - our US guide.',
            guide: 'Mike'
        },
        {
            slogan: 'Escape to gorgeous',
            country: 'ICELAND',
            contact: 'Get knowing - our Iceland guide.',
            guide: 'Elya'
        }
    ];

    return (
        <div className={casesStyles.container}>
            <Case
                className={casesStyles.caseOne}
                animation={props.animation}
                imageData={restructuredDataNodes[0]}
                slogan={casesStringData[0].slogan}
                country={casesStringData[0].country}
                contact={casesStringData[0].contact}
                guide={casesStringData[0].guide}
                ref={case1Ref}
            />
            <Case
                className={casesStyles.caseTwo}
                animation={props.animation}
                imageData={restructuredDataNodes[1]}
                slogan={casesStringData[1].slogan}
                country={casesStringData[1].country}
                contact={casesStringData[1].contact}
                guide={casesStringData[1].guide}
                ref={case2Ref}
            />
            <Case
                className={casesStyles.caseThree}
                animation={props.animation}
                imageData={restructuredDataNodes[2]}
                slogan={casesStringData[2].slogan}
                country={casesStringData[2].country}
                contact={casesStringData[2].contact}
                guide={casesStringData[2].guide}
                ref={case3Ref}
            />
        </div>
    );
}

export default forwardRef(Cases);