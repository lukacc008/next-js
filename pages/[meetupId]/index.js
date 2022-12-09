import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://media.cntraveler.com/photos/62ab85a86df361f5801fd45b/16:9/w_2580,c_limit/Tokyo_GettyImages-1319747119.jpg"
      title="First Meetup"
      address="Tokyo Japan, Busan Street 8"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://media.cntraveler.com/photos/62ab85a86df361f5801fd45b/16:9/w_2580,c_limit/Tokyo_GettyImages-1319747119.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Tokyo Japan, Busan Street 8",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
