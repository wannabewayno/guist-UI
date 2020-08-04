import parseTeam from "../../utils/parseTeam";
import parseRank from '../../utils/parseRank';
import { ExtendArray } from 'grass-roots-react';
ExtendArray();

export default (session, dataKey, [ separationKey , separationValue ]) => {

    if(session) { // do nothing is not defined
        session.ranks[dataKey] = session.ranks[dataKey].map((data,index) => ({...data,rank:index}));
        const { pass , fail } = session.ranks[dataKey].separate(data => data[separationKey] === separationValue)

      const leftData = fail.map(data => data.total)
      const rightData = pass.map(data => data.total)

      return {
          leftData:fail.map(data => data.total),
          rightData:pass.map(data => data.total),
          leftBar:{
            color: parseTeam('communists').CSS(),
            borderColor:'transparent',
            thickness:'30px',
            gap:'5px',
          },
          rightBar:{
            color: parseTeam('capitalists').CSS(),
            borderColor:'transparent',
            thickness:'30px',
            gap:'5px',
          },
          label:{
            left:'Communists',
            right:'Capitalists',
            chart:'Team Spread',
          }
      }
    } 
}