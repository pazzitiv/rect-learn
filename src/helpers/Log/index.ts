import Amplitude, {AmplitudeTrackResponse} from "amplitude";

const Log :(eventName: string) => Promise<AmplitudeTrackResponse> = (eventName: string) => {
    return new Amplitude('4731b59a06287971db9f866cd984a01b')
        .track({
            event_type: eventName,
            user_id: '666777',
            session_id: -1,
            user_properties: {
                'FrontEnd': 'React'
            },
            event_properties: {
                'Action': 'LoginWindow'
            },
            project: {
                name: 'TestDeveloperoModoReactoFrontoEndo'
            }
        })
}

export default Log
