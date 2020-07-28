import parseTeam from "../../utils/parseTeam"
import { ExtendArray } from 'grass-roots-react'
ExtendArray();

export default (session, dataKey, [ separationKey , separationValue ]) => {

    if(session) { // do nothing is not defined

        const { pass , fail } = session.ranks[dataKey].separate(data => data[separationKey]===separationValue)

        return {
            leftData:fail.map(data => data.total),
            rightData:pass.map(data => data.total),
            leftBar:{
              color: parseTeam('terrorists').CSS(),
              borderColor:'transparent',
              thickness:'30px',
              gap:'5px',
            },
            rightBar:{
              color: parseTeam('freedom').CSS(),
              borderColor:'transparent',
              thickness:'30px',
              gap:'5px',
            },
            label:{
              left:'left',
              right:'right',
              chart:'Team Spread',
            }
        }
    } 
}