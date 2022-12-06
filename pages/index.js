import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://media.cntraveler.com/photos/62ab85a86df361f5801fd45b/16:9/w_2580,c_limit/Tokyo_GettyImages-1319747119.jpg",
    address: "Tokyo Japan",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://media.cntraveler.com/photos/62ab85a86df361f5801fd45b/16:9/w_2580,c_limit/Tokyo_GettyImages-1319747119.jpg",
    address: "Tokyo Japan",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
