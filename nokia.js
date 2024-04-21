

const prompt = require('prompt-sync')();



    function menu(){
        console.log("")
        console.log(" Welcome to Nokia 3310 :)")
        console.log(`
        1. Phone book
        2. Messages
        3. Chat
        4. Call register
        5. Tones
        6. Settings
        7. Call divert
        8. Games
        9. Calculator
        10. Reminders
        11. Clock
        12. Profiles
        13. SIM services
        14. Exit app`)

        let menuOptions = prompt("Enter 1 - 14 to select options: ");
        switch (menuOptions) {
            case '1':
                console.log(phoneBook());
                break;
            
            case '2':
                console.log(messages());
                break;
            
            case '3':
                console.log(chat());
                break;
        
            case '4':
                console.log(callRegister());
                break;

            case '5':
                console.log(tones());
                break;
        
            case '6':
                console.log(settings());
                break;

            case '7':
                console.log("\"Call divert\"");
                break;

            case '8':
                console.log("\"Games\"");
                break;

            case '9':
                console.log("\Calculator\"");
                break;

            case '10':
                console.log("\"Reminders\"");
                break;

            case '11':
                console.log(clock());
                break;

            case '12':
                console.log("\"Profiles\"");
                break;
        
            case '13':
                console.log("\SIM services\"");
                break;
            
            case '14':
                process.exit()
            default:
                console.log("Invalid option");
        
    }
    backButton();
    }

    function phoneBook(){
        console.log("")
        console.log("    Phone Book     ")
        console.log(`
        1. Search
        2. Service Nos
        3. Add name
        4. Erase
        5. Edit
        6. Assign tone
        7. Sen b'card
        8. Options
        9. Speed dials
        10. Voice tags`)

        let option = prompt("Enter 1 - 10 to select: ");
        switch (option) {
            case '1':
                console.log("\"Search\"");
                break;
            
            case '2':
                console.log("\"Service Nos\"");
                break;
            
            case '3':
                console.log("\"Add name\"");
                break;
        
            case '4':
                console.log("\"Erase\"");
                break;

            case '5':
                console.log("\"Edit\"");
                break;
        
            case '6':
                console.log("\"Assign tone\"");
                break;

            case '7':
                console.log("\"Send b'card\"");
                break;

            case '8':
                console.log(options());
                break;

            case '9':
                console.log("\"Speed dials\"");
                break;

            case '10':
                console.log("\"Voice tags\"");
                break;
        
            default:
                console.log("Invalid option");
        
        }
        backButton();
    }

    function options(){
        console.log("")
        console.log("    Options     ")
         console.log("1. Type of view\n2. Memory status\n");
         let option = prompt("Enter 1 or 2 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Type of view\"");
            break;
        case '2':
            console.log("\"Memory status\"");
            break;
        default:
            console.log("Invalid option");
    }
    backButton();
    }

   function messages(){
        console.log("")
        console.log("    Messages     ")
        console.log(`
        1. Write messages
        2. Inbox
        3. Outbox
        4. Picture messages
        5. Templates
        6. Smileys
        7. Message settings
        8. Info service
        9. Voice mailbox number
        10. service command editor  `)

        let option = prompt("Enter 1 - 10 to select: ");
        switch (option) {
            case '1':
                console.log("\"Write messages\"");
                break;
            
            case '2':
                console.log("\"Inbox\"");
                break;
            
            case '3':
                console.log("\"Outbox\"");
                break;
        
            case '4':
                console.log("\"Picture messages\"");
                break;

            case '5':
                console.log("\"Templates\"");
                break;
        
            case '6':
                console.log("\"Smileys\"");
                break;

            case '7':
                console.log(messageSettings());
                break;

            case '8':
                console.log("\"Info service\"");
                break;

            case '9':
                console.log("\"Voice mailbox number\"");
                break;

            case '10':
                console.log("\"Service command editor\"");
                break;
        
            default:
                console.log("Invalid option");
        
        }
        backButton();
    }
    function messageSettings(){
        console.log("")
        console.log("    Message Settings     ")
        console.log(`
        1. Set
        2. Common
        `)

        let option = prompt("Enter 1 or 2 to select options: ");
        switch (option) {
        case '1':
            console.log(set());
            break;
        case '2':
            console.log(common());
            break;
        default:
            console.log("Invalid option");
    }
    backButton();
    }
    function set(){
        console.log("")
        console.log("    Set     ")
        console.log(`
        1. Message centre number
        2. Message sent as
        3. Message validity`)

        let option = prompt("Enter 1 - 3 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Message centre number\"");
            break;

        case '2':
            console.log("\"Message sent as\"");
            break;
        
        case '3':
            console.log("\"Message validity\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();
    }
    function common(){
        console.log("")
        console.log("    Common     ")
        console.log(`
        1. Delivery reports
        2. Reply via same centre
        3. Character support`)

        let option = prompt("Enter 1 - 3 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Delivery reports\"");
            break;

        case '2':
            console.log("\"Reply via same centre\"");
            break;
        
        case '3':
            console.log("\"Character support\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();

    }
   function chat(){
    console.log("")
        console.log("\"    Chat    \"")
    }

    function callRegister(){
        console.log(`
        1. Missed calls
        2. Received calls
        3. Dialled numbers
        4. Erase recent call lists
        5. Show call duration
        6. Show call costs
        7. Call cost settings
        8. Prepaid credit
        `)

        let option = prompt("Enter 1 - 8 to select: ");
        switch (option) {
            case '1':
                console.log("\"Missed calls\"");
                break;
            
            case '2':
                console.log("\"Received calls\"");
                break;
            
            case '3':
                console.log("\"Dialled numbers\"");
                break;
        
            case '4':
                console.log("\"Erase recent call lists\"");
                break;

            case '5':
                console.log(showCallDuration());
                break;
        
            case '6':
                console.log(showCallCost());
                break;

            case '7':
                console.log(callCostSettings());
                break;

            case '8':
                console.log("\"Prepaid credit\"");
                break;
        
            default:
                console.log("Invalid option");
        
        }
        backButton();
    }
    function showCallDuration(){
        console.log("")
        console.log("    Show Call Duration     ")
        console.log(`
        1. Last call duration
        2. All call's duration
        3. Received call's duration
        4. Dialed call duration
        5. Clear timer
        `)

        let option = prompt("Enter 1 - 5 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Last call duration\"");
            break;

        case '2':
            console.log("\"All call's duration\"");
            break;
        
        case '3':
            console.log("\"Received call's duration\"");
            break;

        case '4':
            console.log("\"Dialed call duration\"");
            break;
            
        case '5':
            console.log("\"Clear timer\"");
            break;
        default:
            console.log("Invalid option");
    }
    backButton();
    }
    function showCallCost(){
        console.log("")
        console.log("    Show Call Cost     ")
        console.log(`
        1. Last call cost
        2. All call's costs
        3. Clear counters
        `)

        let option = prompt("Enter 1 - 3 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Last call cost\"");
            break;

        case '2':
            console.log("\"All call's costs\"");
            break;
        
        case '3':
            console.log("\"Clear counters\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();
    }


   function callCostSettings(){
    console.log("")
        console.log("    Call Cost Settings     ")
        console.log(`
        1. Call cost limit
        2. Show costs in
        `)

        let option = prompt("Enter 1 - 2 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Call cost limit\"");
            break;

        case '2':
            console.log("\"AShow costs in\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();
    }

    function tones(){
        console.log("")
        console.log("    Tones     ")
        console.log(`
        1. Ringing tone
        2. Ringing volume
        3. Incoming call alert
        4. Composer
        5. Messages alert tone 
        6. Keypad tones
        7. Warning and game tones
        8. Vibrating alert
        9. Screen saver
        `)

        let option = prompt("Enter 1 - 9 to select: ");
        switch (option) {
            case '1':
                console.log("\"Ringing tone\"");
                break;
            
            case '2':
                console.log("\"Ringing volume\"");
                break;
            
            case '3':
                console.log("\"Incoming call alert\"");
                break;
        
            case '4':
                console.log("\"Composer\"");
                break;

            case '5':
                console.log("\"Messages alert tone\"");
                break;
        
            case '6':
                console.log("\"Keypad tones\"");
                break;

            case '7':
                console.log("\"Warning and game tones\"");
                break;

            case '8':
                console.log("\"Vibrating alert\"");
                break;

            case '9':
                console.log("\"Screen saver\"");
                break;

            default:
                console.log("Invalid option");
        
        }
        backButton();
    }

   function settings(){
    console.log("")
        console.log("    Settings     ")
        console.log(`
        1. Call settings
        2. Phone settins
        3. Security settings
        4. Restore factory settings
        `)

        let option = prompt("Enter 1 - 5 to select options: ");
        switch (option) {
        case '1':
            console.log(callSettings());
            break;

        case '2':
            console.log(phoneSettings());
            break;
        
        case '3':
            console.log(securitySettings());
            break;

        case '4':
            console.log("\"Restore factory settings\"");
            break;
            
        default:
            console.log("Invalid option");
    }
    backButton();
    }

   function callSettings(){
    console.log("")
        console.log("    Call Settings     ")
        console.log(`
        1. Automatic redial
        2. Speed dialing
        3. Call waiting options
        4. Own waiting options
        5. Phone line in use 
        6. Automatic answer
        `)

        let option = prompt("Enter 1 - 6 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Automatic redial\"");
            break;

        case '2':
            console.log("\"Speed dialing\"");
            break;
        
        case '3':
            console.log("\"Call waiting options\"");
            break;

        case '4':
            console.log("\"Own waiting options\"");
            break;
            
        case '5':
            console.log("\"Phone line in use\"");
            break;

        case '6':
            console.log("\"Automatic answer\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();
    }

   function phoneSettings(){
    console.log("")
        console.log("    Phone Settings     ")
        console.log(`
        1. Language
        2. Cell info display
        3. Welcome note
        4. Network selection
        5. Lights
        6. Confirm SIM service actions
        `)

        let option = prompt("Enter 1 - 6 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Language\"");
            break;

        case '2':
            console.log("\"Cell info display\"");
            break;
        
        case '3':
            console.log("\"Welcome note\"");
            break;

        case '4':
            console.log("\"Network selection\"");
            break;
            
        case '5':
            console.log("\"Lights\"");
            break;

        case '6':
            console.log("\"Confirm SIM service actions\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();
    }

   function securitySettings(){
    console.log("")
        console.log("    Security Settings     ")
        console.log(`
        1. Pin code request
        2. Call barring service
        3. Fixed dialling
        4. Closer user group
        5. Phone security
        6. Change access codes
        `)

        let option = prompt("Enter 1 - 6 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Pin code request\"");
            break;

        case '2':
            console.log("\"Call barring service\"");
            break;
        
        case '3':
            console.log("\"Fixed dialling\"");
            break;

        case '4':
            console.log("\"Closer user group\"");
            break;
            
        case '5':
            console.log("\"Phone security\"");
            break;

        case '6':
            console.log("\"Change access codes\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();
    }

   function clock(){
    console.log("")
        console.log("    Clock     ")
        console.log(`
        1. Alarm clock
        2. Clock settings
        3. Date setting
        4. Stopwatch
        5. Countdown timer
        6. Auto update of date time
        `)

        let option = prompt("Enter 1 - 6 to select options: ");
        switch (option) {
        case '1':
            console.log("\"Alarm clock\"");
            break;

        case '2':
            console.log("\"Clock settings\"");
            break;
        
        case '3':
            console.log("\"Date setting\"");
            break;

        case '4':
            console.log("\"Stopwatch\"");
            break;
            
        case '5':
            console.log("\"Countdown timer\"");
            break;

        case '6':
            console.log("\"Auto update of date time\"");
            break;

        default:
            console.log("Invalid option");
    }
    backButton();
    }

    function backButton() {
        let backToMenu = prompt("Enter 1 to go back to menu: ");
    
        while (backToMenu !== '1') {
        console.log("Enter 1!");
        backToMenu = prompt("Enter 1 to go back to menu: ");
        }

        menu(); 
    }

    console.log(menu())

