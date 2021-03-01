import baby from '../images/baby.jpg';
import beegee from '../images/beegee.jpg';
import brainfog from '../images/brainfog.jpg';
import brexit from '../images/brexit.jpg';
import chadwickboseman from '../images/chadwickboseman.jpg';
import chriscornell from '../images/chriscornell.jpg';
import commune from '../images/commune.jpg';
import conservation from '../images/conservation.jpg';
import covid from '../images/covid.jpg';
import covidmakemethink from '../images/covidmakemethink.jpg';
import covidrecord from '../images/covidrecord.jpg';
import covidrussia from '../images/covidrussia.jpg';
import disney from '../images/disney.jpg';
import drone from '../images/drone.jpg';
import elonmusk from '../images/elonmusk.jpg';
import encryptapp from '../images/encryptapp.jpg';
import England from '../images/England.jpg';
import friendship from '../images/friendship.jpg';
import germans from '../images/germans.jpg';
import hobbiesforcouples from '../images/hobbiesforcouples.jpg';
import huawei from '../images/huawei.jpg';
import internetm from '../images/internetm.jpg';
import kennelsatelite  from '../images/kennelsatelite.jpg';
import odeon from '../images/odeon.jpg';
import pfizer from '../images/pfizer.jpg';
import Popmart from '../images/Popmart.jpg';
import pound from '../images/pound.jpg';
import princeharry from '../images/princeharry.jpg';
import timnit from '../images/timnit.jpg';
import wind from '../images/wind.jpg';
import { v4 as uuidv4 } from 'uuid';
const initialState = {

    post : [
       {
        id: uuidv4(),
        image: chadwickboseman,
        title: "Boseman will not be replaced in Black Panther 2",
        category: 'Entertainment',
        description: "The late Chadwick Boseman's character will not be taken over by new actor, Marvel confirms.",
        content: 
        `Chadwick Boseman's character in Black Panther will not be recast with a new 
        actor for the blockbuster's sequel, Marvel Studios has confirmed.
        Boseman led the hit 2018 film as T'Challa, the king of Wakanda, before his 
        death in August at the age of 43.\n
        Marvel boss Kevin Feige said Boseman's performance was "iconic and 
        transcends any iteration of the character in any other medium from Marvel's 
        past".\n
        "And it's for that reason that we will not recast the character," he said.\n

        Black Panther, which made $1.3bn (£1bn) at the global box office, was the first 
        superhero movie to be nominated for best picture at the Oscars.\n

        "To honour the legacy that Chad helped us build, we want to continue to
        explore the world of Wakanda and all the rich and varied characters 
        introduced in the first film," Feige said.\n

        Director Ryan Coogler, who made the original, is already "hard at work" on the 
        follow-up, which is due for release in July 2022, Feige added.
        There had been speculation that film-makers would use a digital double for 
        Boseman in the sequel, but that has previously been denied by executive 
        producer Victoria Alonso.\n
        
        The actor died four years after being diagnosed with colon cancer.
        He is tipped to win a posthumous Oscar for playing a headstrong trumpeter in 
        his final film, Ma Rainey's Black Bottom, which was recently released in 
        cinemas and is out on Netflix next week.`

    },
    {
        id: uuidv4(),
        image: hobbiesforcouples,
        title: "The life project",
        category: "Worklife",
        description: "Why so many couples are splitting up."
    },
    {
        id: uuidv4(),
        image: elonmusk,
        title: "Elon Musk's Starship prototype makes a big impact",
        category: "Science",
        description: "The US entrepreneur's latest Starship rocket prototype impresses in flight, but crashes on landing."
    },
    {
        id: uuidv4(),
        image: covidrussia,
        title: "Russia begins Covid vaccinations in Moscow",
        category: "Health",
        description: " The home-grown Sputnik V vaccine, which is still undergoing math testing, is being used."
    }, 
    {
        id: uuidv4(),
        image: baby,
        title: "Losing a baby during the coronavirus pandemic",
        category: "Health",
        description: "Suffering a miscarriage or stillbirth in normal times is often a difficult, isolating and lonely experience."
    },
    {
        id: uuidv4(),
        image: covid,
        title: "How do i know the covid vaccine is safe",
        category: "Health",
        description: "UK hospitals are expected to start giving the first doses of the Pfizer/BioNtech coronavirus vaccine to people from Tuesday 8 December."
    },
    {
        id: uuidv4(),
        image: encryptapp,
        title: "Children 'at risk' from encryped message apps",
        category: "Technology",
        description: "Encryption could make it harder to police online grooming, England's children's commissioner warns."
    },
    {
        id: uuidv4(),
        image: internetm,
        title: "Man discovers school photo in viral internet meme",
        category: "Technology",
        description: "Adrian Smith discovered a photo of him taken when he was eight years old had a life of its own."
    },
    {
        id: uuidv4(),
        image: huawei,
        title: "US telcos to 'rip and replace' Huawei components",
        category: "Technology",
        description: "The order is the latest US move against chinese communication firm Huawei on security grounds."
    },
    {
        id: uuidv4(),
        image: timnit,
        title: "Google boss apologises for Timnit Gebru now",
        category: "Technology",
        description: "But sunda Pichai does not admit she was fired or explain the circumstances of her depature."
    },
    {
        id: uuidv4(),
        image: drone,
        title: "Drone completes first freight flight to islands",
        category: "Technology",
        description: "The unmanned aircraft took an NHS supply box to islands and returned with local produce."
    },
    {
        id: uuidv4(),
        image: pfizer,
        title: "US drug expert recommends Pfizer vaccine approval",
        category: "Health",
        description: "A panel of advisers to the US Food and Drug Administration deem the vaccine safe and effective."
    },
    {
        id: uuidv4(),
        image: friendship,
        title: "Unlikely friendships forged through Covid",
        category: "Health",
        description: "The pandemic inspires a scheme to pair language students with older people in France via video link."
    },
    {
        id: uuidv4(),
        image: covidrecord,
        title: "Covid drives record emmisions drop in 2020",
        category: "Science",
        description: "The world has seen the biggest annual fall in CO2 emissions since world war two,say researchers."
    },
    {
        id: uuidv4(),
        image: kennelsatelite,
        title: "'Dog kennel' satelite returns first ocean data",
        category: "Science",
        description: "The new Sentinel satelite to track global sea-level rise is in excellent shape, say space officials"
    },
    {
        id: uuidv4(),
        image: wind,
        title: "History of wind recorded in an island's mud",
        category: "Science",
        description: "Lake sediments on remote Marion Island tell the story of the Southern Hermisphere's westerlies."
    },
    {
        id: uuidv4(),
        image: conservation,
        title: "Conservation success set against 31 lost species",
        category: "Science",
        description: "European bison take a step back from the brink,but there is bad news for other animals and plants."
    },
    {
        id: uuidv4(),
        image: commune,
        title: "Housing",
        category: "Worklife",
        description: "The prons and cons of commune living."
    },
    {
        id: uuidv4(),
        image: brainfog,
        title: "Covid-19",
        category: "Worklife",
        description: "The theory that explains your brain fog."
    },
    {
        id: uuidv4(),
        image: germans,
        title: "The life project",
        category: "Worklife",
        description: "How Germans disconnect from the workday"
    },
    {
        id: uuidv4(),
        image: covidmakemethink,
        title: "The life project",
        category: "Worklife",
        description: "'Covid-19 made me rethink career needs'."
    },
    {
        id: uuidv4(),
        image: disney,
        title: "Disney ramps up Star Wars and Marvel franchises",
        category: "Entertainment",
        description: " The expansion marks another industry shift away from cinema to streaming."
    },
    {
        id: uuidv4(),
        image: beegee,
        title: "Here's why there is no Bee Gees Christmas song",
        category: "Entertainment",
        description: "Sir Barry Gibb explains why he and his brothers never succumbed to making a festive single."
    },
    {
        id: uuidv4(),
        image: chriscornell,
        title: "Chris Cornell's family release posthumous album",
        category: "Entertainment",
        description: "The album includes the former Soundgarden frontman's covers of songs by Prince and John Lennon."
    },
    {
        id: uuidv4(),
        image: princeharry,
        title: "Prince Harry surprises mum on Zoom call",
        category: "Entertainment",
        description: "Lidia Sherwood said it was a 'big Shock' to find herself talking to the Duke of Sussex on Zoom."
    },
    {
        id: uuidv4(),
        image: England,
        title: "Banks can weather pandemic,says Bank of England ",
        category: "Business",
        description: "Most risk to financial stability posed by Covid and no-deal Brexit have been mitigated, the Bank says." 
    },
    {
        id: uuidv4(),
        image: brexit,
        title: "Brexit: 'I can't get my wine out of the EU'",
        category: "Business",
        description: "Merchant Simon Taylor says delays at port and Brexit stockpiling is making wine imports impossible." 
    },
    {
        id: uuidv4(),
        image: Popmart,
        title: "Chinese mystery toymaker becomes multi-billionaire",
        category: "Business",
        description: "The founder of Pop Mart has seen his wealth surge as millions of Chinese buy collectible toys." 
    },
    {
        id: uuidv4(),
        image: odeon,
        title: "Odeon cinema owner warns it's running out of cash",
        category: "Business",
        description: "AMC Entertainment Holdings, owner of Odeon Cinemas, is burning through $125m a month." 
    },
    {
        id: uuidv4(),
        image: pound,
        title: "Pound falls on the prospect of no-deal Brexit",
        category: "Business",
        description: "Prime Minister Boris Johnson said it is 'very, very likely' the UK will not secure terms with the EU." 
    }

]

}


const blogReducer = (state=initialState, action ) => {
    switch(action.type){
        case 'ADD_POST':
            const post ={
                id: uuidv4(),
                image: action.payload.image,
                title: action.payload.title,
                category: action.payload.category,
                description: action.payload.description
            }
            return {
                ...state, post: [...state.post, post]
            }

        case 'DELETE_POST':
            return {
                ...state, post: state.post.filter(post => post.id !== action.payload )
            }
        
        case 'UPDATE':
            return {
                ...state, post: state.post.map(post => {if(post.id === action.id){return action.post }else{ return post }}) 
            }
        default:
            return state 
        
        
    }



}
export default blogReducer;