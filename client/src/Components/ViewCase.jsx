import ViewCaseNav from './Navbar/ViewCaseNav';
import CrimeScenePhotographs from './CrimeScenePhotographs';

function ViewCase(props) {
  const crimeId = props.match.params.caseId;
  console.log(props);

  return (
    <div>
      <ViewCaseNav crimeId={crimeId} />
      <div className="">
        <CrimeScenePhotographs />
      </div>
    </div>
  );
}



export default ViewCase;