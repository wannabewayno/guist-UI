import sebastionDcController from './images/sebastian-dc-controller.jpg';

export const colours = {
    salmon:'rgb(255,125,125)',
    red:'hsl(360, 50%, 50%)',
    blue:'hsl(180,50%, 50%)',
    sessionColour:'hsl(0,0%,70%)'
}

export const names = {
    sessionName: {
        display:'Session Name',
        id:'name',
        toDisplay:'true'
    },
    sessionPhrase: {
        display:'Phrase',
        id:'sessionPhrase',
        toDisplay:'true'
    }
}

export const backgroundImageMap = {
    '/':{ image: sebastionDcController, positionX:'center', positionY:'10vh'}
}
