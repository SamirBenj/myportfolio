import React from "react";
import CardProject from "../Components/cardProjects";
import NavBar from "../Components/navbar";
import dataJson from '../assets/projectsJson.json'
import dataJsonFigma from '../assets/projectFigma.json'
const MyProjects = ()=>{

    
    return(
        <div>
            <NavBar></NavBar>

            <div>
                <h2>Mes Applications</h2>
                        <section className="gridProject">
                            {dataJson.map((value,index)=>{
                                return(
                                    <div key={index}>
                                        <CardProject data={value} ></CardProject>
                                    </div>
                                );
                            })
                            }
                        </section>
            </div>
            

            <div>
                <h2>Mes Design Figma</h2>
                <section className="gridProject">
                    {dataJsonFigma.map((value,index)=>{
                        return(
                            <div key={index}>
                                <CardProject data={value} ></CardProject>
                            </div>
                        );
                    })
                    }
                </section>
            </div>
           
        </div>
    );
}
export default MyProjects