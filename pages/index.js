import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
    {
        id:"m1",
        title: "First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/The_confluence_of_the_Sava_into_the_Danube_at_Belgrade.jpg",
        adress: "Belgrade Serbia Kalemegdan Fortress",
        description: "This is a first meetup!"
    },
    {
        id:"m2",
        title: "Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/The_confluence_of_the_Sava_into_the_Danube_at_Belgrade.jpg",
        adress: "Belgrade Serbia Kalemegdan Fortress",
        description: "This is a second meetup!"
    }
]

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
};

export default HomePage;