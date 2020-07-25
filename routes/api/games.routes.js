const router = require("express").Router();
const { game:{ createGame } } = require("../../controllers");

// matches with /api/games
router
  .route('/games')
  .post(createGame)

module.exports = router;


function App(){

    const [ isDisabled, setIsDisabled ] = useState(false);
  
    function handleSubmit(){
      API.getResults
    }
    
  
  
    return (
      <FormContainer onSubmit={handleSubmit}>
        <SubmitButton
          disabled={isDisabled}
        />
      </FormContainer>
    )
  
  }