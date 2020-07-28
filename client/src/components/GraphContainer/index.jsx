import React from 'react';
import { HorizontalBar,Bar } from 'react-chartjs-2';
import { ExtendArray } from 'grass-roots-react';
import parseTeam from '../../utils/parseTeam';
ExtendArray();

export default ({ranks={}}) => {


    function constructChartData(data,team){
        return {
            labels: data.map(({ gamertag }) => gamertag ),
            datasets:[{
                label:team,
                backgroundColor:parseTeam(team.toLowerCase()).CSS(),
                data:data.map(({total}) => total),
            }],
            options: {
                scales:{
                    x:{
                        stacked:true
                    },
                    y:{
                        stacked:true
                    }
                }
            }
        }
    }

    console.log(ranks);
    //create a function that separates teams hah I have one that does
    let teamFreedom;
    let teamTerrorists;
    if(ranks.score){
        const { pass, fail } = ranks.score.separate(({team}) => team==='freedom')
        teamFreedom = constructChartData(pass,'Freedom');
        teamTerrorists = constructChartData(fail,'Terrorists');
        console.log(pass);
        console.log(fail);
    }
   

    return(
        <div>
            <HorizontalBar data={teamFreedom?teamFreedom:[]}/>
            <HorizontalBar data={teamTerrorists?teamTerrorists:[]}/>
        </div>
    )

}