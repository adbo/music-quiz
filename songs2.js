const questions = [
  {
    videoId: "sOnqjkJTMaA", answers: ["Michael Jackson - Thriller", "Michael Jackson - Beat It", "Ghost - Dance Macabre", "Rockwell - Somebody\'s Watching Me"], correctAnswer: "Michael Jackson - Thriller",
    music: { startTime: 365 },
    video: { startTime: 495, questionText: "This legendary zombie dance is from which music video?" }
  },
  {
    videoId: "djV11Xbc914", answers: ["A-ha - Take On Me", "Dire Straits - Money for Nothing", "Gorillaz - Clint Eastwood", "Peter Gabriel - Sledgehammer"], correctAnswer: "A-ha - Take On Me",
    music: { startTime: 15 },
    video: { startTime: 75, questionText: "This pencil-sketch animation is a hallmark of which video?" }
  },
  {
    videoId: "hTWKbfoikeg", answers: ["Nirvana - Smells Like Teen Spirit", "Blink-182 - All the Small Things", "The Offspring - Pretty Fly (for a White Guy)", "My Chemical Romance - Teenagers"], correctAnswer: "Nirvana - Smells Like Teen Spirit",
    music: { startTime: 68 },
    video: { startTime: 25, questionText: "Which music video features this famous high school pep rally?" }
  },
  {
    videoId: "8SbUC-UaAxE", answers: ["Guns N' Roses - November Rain", "Meat Loaf - I\'d Do Anything for Love", "Bon Jovi - Always", "Aerosmith - Cryin'"], correctAnswer: "Guns N' Roses - November Rain",
    music: { startTime: 250 },
    video: { startTime: 305, questionText: "The wedding and the funeral are key scenes in which rock epic?" }
  },
  {
    videoId: "OJWJE0x7T4Q", answers: ["Peter Gabriel - Sledgehammer", "The White Stripes - Fell in Love with a Girl", "Herbie Hancock - Rockit", "Talking Heads - Road to Nowhere"], correctAnswer: "Peter Gabriel - Sledgehammer",
    music: { startTime: 65 },
    video: { startTime: 121, questionText: "This groundbreaking stop-motion video is for which song?" }
  },
  {
    videoId: "dTAAsCNK7RA", answers: ["OK Go - Here It Goes Again", "Maroon 5 - Moves Like Jagger", "Vampire Weekend - A-Punk", "Foster the People - Pumped Up Kicks"], correctAnswer: "OK Go - Here It Goes Again",
    music: { startTime: 45 },
    video: { startTime: 65, questionText: "This famous treadmill dance routine is from which band?" }
  },
  {
    videoId: "2vjPBrBU-TM", answers: ["Sia - Chandelier", "Kesha – Praying", "Demi Lovato – Skyscraper", "Ariana Grande – Into You"], correctAnswer: "Sia - Chandelier",
    music: { startTime: 60 },
    video: { startTime: 70, questionText: "A young Maddie Ziegler famously dances in which music video?" }
  },
  {
    videoId: "4JkIs37a2JE", answers: ["Jamiroquai - Virtual Insanity", "Aphex Twin - Come to Daddy", "Björk - All Is Full of Love", "Daft Punk - Around the World"], correctAnswer: "Jamiroquai - Virtual Insanity",
    music: { startTime: 65 },
    video: { startTime: 95, questionText: "This surreal video with moving floors belongs to which artist?" }
  },
  {
    videoId: "qrO4YZeyl0I", answers: ["Lady Gaga - Bad Romance", "Katy Perry - E.T.", "Rihanna - Disturbia", "Nicki Minaj - Monster"], correctAnswer: "Lady Gaga - Bad Romance",
    music: { startTime: 130 },
    video: { startTime: 250, questionText: "Which striking video features these memorable 'monster' claws?" }
  },
  {
    videoId: "cjIvu7e6Wq8", answers: ["Missy Elliott - Work It", "Missy Elliott - Get Ur Freak On", "Missy Elliott - Lose Control", "Missy Elliott - WTF (Where They From)"], correctAnswer: "Missy Elliott - Work It",
    music: { startTime: 50 },
    video: { startTime: 65, questionText: "Which Missy Elliott video is famous for its 'flipped and reversed' lyrics?" }
  },
  {
    videoId: "VYOjWnS4cMY", answers: ["Childish Gambino - This Is America", "Childish Gambino - Feels Like Summer", "Childish Gambino - Heartbeat", "Childish Gambino - 3005"], correctAnswer: "Childish Gambino - This Is America",
    music: { startTime: 155 },
    video: { startTime: 55, questionText: "This powerful, viral video is for which Childish Gambino song?" }
  },
  {
  videoId: "1-xGerv5FOk",
  answers: [
    "Alan Walker - Alone",
    "Kygo - Firestone",
    "Zedd - Clarity",
    "Martin Garrix - Animals"
  ],
  correctAnswer: "Alan Walker - Alone",
  music: { startTime: 68 },
  video: {
    startTime: 50,
    questionText: "Which masked DJ travels through stunning Nordic landscapes, joined by fans, in this uplifting EDM anthem?"
  }
},
  {
    videoId: "y6Sxv-sUYtM", answers: ["Pharrell Williams - Happy", "Bruno Mars - 24K Magic", "Justin Timberlake - Señorita", "CeeLo Green - Forget You"], correctAnswer: "Pharrell Williams - Happy",
    music: { startTime: 58 },
    video: { startTime: 45, questionText: "Which artist famously wears the giant hat in this uplifting video?" }
  },
  {
    videoId: "z5rRZdiu1UE", answers: ["Beastie Boys - Sabotage", "Red Hot Chili Peppers - Give It Away", "Rage Against the Machine - Testify", "Green Day - Basket Case"], correctAnswer: "Beastie Boys - Sabotage",
    music: { startTime: 10 },
    video: { startTime: 42, questionText: "Which band created this famous parody of 1970s police TV shows?" }
  },
  {
    videoId: "k2qgadSvNyU", answers: ["Dua Lipa - New Rules", "Dua Lipa - Don't Start Now", "Dua Lipa - Houdini", "Dua Lipa - Physical"], correctAnswer: "Dua Lipa - New Rules",
    music: { startTime: 50 },
    video: { startTime: 115, questionText: "This video, with its iconic choreography in a hotel, is for which Dua Lipa song?" }
  },
  {
    videoId: "tvTRZJ-4EyI", answers: ["Kendrick Lamar - HUMBLE.", "Kendrick Lamar - DNA.", "Kendrick Lamar - Not Like Us", "Kendrick Lamar - Swimming Pools"], correctAnswer: "Kendrick Lamar - HUMBLE.",
    music: { startTime: 50 },
    video: { startTime: 150, questionText: "This surreal 'last supper' scene is from which Kendrick Lamar video?" }
  },
  {
    videoId: "uxpDa-c-4Mc", answers: ["Drake - Hotline Bling", "The Weeknd - Can't Feel My Face", "Post Malone - Circles", "Kanye West - Stronger"], correctAnswer: "Drake - Hotline Bling",
    music: { startTime: 90 },
    video: { startTime: 75, questionText: "Which artist's unique dancing in colorful boxes made this video a viral sensation?" }
  },
  {
    videoId: "My2FRPA3Gf8", answers: ["Miley Cyrus - Wrecking Ball", "Katy Perry - Roar", "Lady Gaga - Paparazzi", "Sia - Elastic Heart"], correctAnswer: "Miley Cyrus - Wrecking Ball",
    music: { startTime: 55 },
    video: { startTime: 80, questionText: "Which artist famously rides a wrecking ball in this emotional video?" }
  },
  {
    videoId: "8UVNT4wvIGY", answers: ["Gotye - Somebody That I Used to Know", "Peter Gabriel - Sledgehammer", "alt-J - Breezeblocks", "Bon Iver - Holocene"], correctAnswer: "Gotye - Somebody That I Used to Know",
    music: { startTime: 40 },
    video: { startTime: 140, questionText: "This stop-motion body paint effect is the signature of which video?" }
  },
  {
    videoId: "qfNmyxV2Ncw", answers: ["Aerosmith - Cryin'", "Bon Jovi - Always", "Guns N' Roses - Don't Cry", "Poison - Every Rose Has Its Thorn"], correctAnswer: "Aerosmith - Cryin'",
    music: { startTime: 70 },
    video: { startTime: 160, questionText: "This video, starring a young Alicia Silverstone, is an anthem by which band?" }
  },
  {
    videoId: "cbGSy6PKOb0", answers: ["Björk - All Is Full of Love", "Daft Punk - Technologic", "Aphex Twin - Windowlicker", "The Chemical Brothers - Let Forever Be"], correctAnswer: "Björk - All Is Full of Love",
    music: { startTime: 60 },
    video: { startTime: 155, questionText: "Which artist's video features two robots falling in love and being assembled?" }
  },
  {
    videoId: "YlUKcNNmywk", answers: ["Red Hot Chili Peppers - Californication", "Gorillaz - 19-2000", "Linkin Park - Points of Authority", "Korn - Freak on a Leash"], correctAnswer: "Red Hot Chili Peppers - Californication",
    music: { startTime: 39 },
    video: { startTime: 65, questionText: "Which band created this video with a 'video game' aesthetic?" }
  },
  {
    videoId: "jRGrNDV2mKc", answers: ["Korn - Freak on a Leash", "Korn - Falling Away from Me", "Korn - Blind", "Korn - Got The Life"], correctAnswer: "Korn - Freak on a Leash",
    music: { startTime: 180 },
    video: { startTime: 155, questionText: "The 'bullet time' effect following a real bullet is from which Korn video?" }
  },
  {
    videoId: "vabnZ9-ex7o", answers: ["Nirvana - Come As You Are", "Nirvana - Lithium", "Nirvana - Smells Like Teen Spirit", "Nirvana - In Bloom"], correctAnswer: "Nirvana - Come As You Are",
    music: { startTime: 20 },
    video: { startTime: 85, questionText: "A baby underwater chasing a dollar bill is a memorable scene from which video?" }
  },
  {
    videoId: "JGwWNGJdvx8", answers: ["Ed Sheeran – Shape of You", "Justin Bieber – Sorry", "The Weeknd – Starboy", "Shawn Mendes – Señorita"], correctAnswer: "Ed Sheeran – Shape of You",
    music: { startTime: 15 },
    video: { startTime: 80, questionText: "Which video features a training montage in a boxing gym?" }
  },
  {
    videoId: "kJQP7kiw5Fk", answers: ["Luis Fonsi – Despacito", "Carlos Vives – La Bicicleta", "Daddy Yankee – Gasolina", "Enrique Iglesias – Bailando"], correctAnswer: "Luis Fonsi – Despacito",
    music: { startTime: 30 },
    video: { startTime: 130, questionText: "This beach dance scene is from which global hit?" }
  },
  {
    videoId: "9bZkp7q19f0", answers: ["PSY – Gangnam Style", "Blackpink – Ddu-Du Ddu-Du", "BTS – Dynamite", "Big Bang – Fantastic Baby"], correctAnswer: "PSY – Gangnam Style",
    music: { startTime: 60 },
    video: { startTime: 70, questionText: "The famous 'horse dance' comes from which viral video?" }
  },
  {
    videoId: "09R8_2nJtjg", answers: ["Maroon 5 – Sugar", "OneRepublic – Counting Stars", "Coldplay – Adventure of a Lifetime", "Imagine Dragons – Demons"], correctAnswer: "Maroon 5 – Sugar",
    music: { startTime: 70 },
    video: { startTime: 125, questionText: "Which band crashes multiple weddings in this music video?" }
  },
  {
    videoId: "pRpeEdMmmQ0", answers: ["Shakira – Waka Waka", "Jennifer Lopez – On the Floor", "Ricky Martin – Livin’ la Vida Loca", "Maluma – Felices los 4"], correctAnswer: "Shakira – Waka Waka",
    music: { startTime: 50 },
    video: { startTime: 70, questionText: "This official FIFA World Cup anthem features which artist?" }
  },
  {
    videoId: "4NRXx6U8ABQ", answers: ["The Weeknd – Blinding Lights", "Ed Sheeran – Bad Habits", "Post Malone – Circles", "Harry Styles – Watermelon Sugar"], correctAnswer: "The Weeknd – Blinding Lights",
    music: { startTime: 80 },
    video: { startTime: 50, questionText: "This nighttime drive through a city is from which hit song?" }
  },
  {
    videoId: "TUVcZfQe-Kw", answers: ["Dua Lipa – Levitating", "Ariana Grande – 7 rings", "Katy Perry – Firework", "Billie Eilish – Everything I Wanted"], correctAnswer: "Dua Lipa – Levitating",
    music: { startTime: 35 },
    video: { startTime: 60, questionText: "This futuristic elevator dance party is from which pop hit?" }
  },
  {
    videoId: "G7KNmW9a75Y", answers: ["Miley Cyrus – Flowers", "Olivia Rodrigo – Drivers License", "Sabrina Carpenter – Feather", "Taylor Swift – Anti-Hero"], correctAnswer: "Miley Cyrus – Flowers",
    music: { startTime: 25 },
    video: { startTime: 45, questionText: "Which artist is seen exercising and enjoying independence in this video?" }
  },
  {
    videoId: "bo_efYhYU2A", answers: ["Lady Gaga & Bradley Cooper – Shallow", "Adele – Easy on Me", "Sam Smith – I'm Not the Only One", "Sia – Snowman"], correctAnswer: "Lady Gaga & Bradley Cooper – Shallow",
    music: { startTime: 75 },
    video: { startTime: 140, questionText: "This performance on stage is from which movie's hit song?" }
  },
  {
    videoId: "ru0K8uYEZWw", answers: ["Justin Timberlake – Can't Stop the Feeling!", "Bruno Mars – Treasure", "Maroon 5 – Moves Like Jagger", "One Direction – What Makes You Beautiful"], correctAnswer: "Justin Timberlake – Can't Stop the Feeling!",
    music: { startTime: 42 },
    video: { startTime: 100, questionText: "Which video features people dancing in a supermarket and a diner?" }
  },
  {
    videoId: "dvgZkm1xWPE", answers: ["Coldplay – Viva la Vida", "U2 – Vertigo", "Snow Patrol – Chasing Cars", "Keane – Somewhere Only We Know"], correctAnswer: "Coldplay – Viva la Vida",
    music: { startTime: 60 },
    video: { startTime: 30, questionText: "Which band is seen performing as they slowly turn into paint strokes?" }
  },
  {
    videoId: "kXYiU_JCYtU", answers: ["Linkin Park – Numb", "Green Day – American Idiot", "Three Days Grace – Animal I Have Become", "My Chemical Romance – Helena"], correctAnswer: "Linkin Park – Numb",
    music: { startTime: 55 },
    video: { startTime: 95, questionText: "This video intercuts a band's performance with a story of a struggling student." }
  },
  {
    videoId: "YQHsXMglC9A", answers: ["Adele – Hello", "Alicia Keys – If I Ain't Got You", "Leona Lewis – Bleeding Love", "Christina Aguilera – Beautiful"], correctAnswer: "Adele – Hello",
    music: { startTime: 88 },
    video: { startTime: 30, questionText: "This sepia-toned video features a flip phone and a house in the woods." }
  },
  {
    videoId: "CevxZvSJLk8", answers: ["Katy Perry – Roar", "Lady Gaga – Poker Face", "P!nk – So What", "Kelly Clarkson – Stronger"], correctAnswer: "Katy Perry – Roar",
    music: { startTime: 62 },
    video: { startTime: 150, questionText: "Which artist tames a tiger in this jungle-themed video?" }
  },
  {
    videoId: "CvBfHwUxHIk", answers: ["Rihanna – Umbrella", "Beyoncé – Halo", "Shakira – Whenever, Wherever", "Jennifer Hudson – Spotlight"], correctAnswer: "Rihanna – Umbrella",
    music: { startTime: 80 },
    video: { startTime: 100, questionText: "This video is famous for its use of silver body paint and silhouettes." }
  },
  {
    videoId: "xFYQQPAOz7Y", answers: ["Eminem – Lose Yourself", "Kendrick Lamar – Humble", "Post Malone – Rockstar", "Dr. Dre – Still D.R.E."], correctAnswer: "Eminem – Lose Yourself",
    music: { startTime: 70 },
    video: { startTime: 25, questionText: "Which rapper is seen writing lyrics on a bus in this video?" }
  },
  {
    videoId: "7wtfhZwyrcc", answers: ["Imagine Dragons – Believer", "Fall Out Boy – Centuries", "OneRepublic – Love Runs Out", "Twenty One Pilots – Heathens"], correctAnswer: "Imagine Dragons – Believer",
    music: { startTime: 45 },
    video: { startTime: 80, questionText: "This video features a surreal boxing match." }
  },
  {
    videoId: "HCjNJDNzw8Y", answers: ["Camila Cabello – Havana", "Selena Gomez – Wolves", "Dua Lipa – New Rules", "Billie Eilish – Ocean Eyes"], correctAnswer: "Camila Cabello – Havana",
    music: { startTime: 38 },
    video: { startTime: 25, questionText: "This video is styled like a telenovela." }
  },
  {
    videoId: "H5v3kku4y6Q", answers: ["Harry Styles – As It Was", "Shawn Mendes – Stitches", "George Ezra – Shotgun", "Lewis Capaldi – Someone You Loved"], correctAnswer: "Harry Styles – As It Was",
    music: { startTime: 18 },
    video: { startTime: 65, questionText: "Which artist is seen running on a giant treadmill in this video?" }
  },
  {
    videoId: "wXhTHyIgQ_U", answers: ["Post Malone – Circles", "The Weeknd – Save Your Tears", "Glass Animals – Heat Waves", "Tones and I – Dance Monkey"], correctAnswer: "Post Malone – Circles",
    music: { startTime: 40 },
    video: { startTime: 50, questionText: "This video features a knight in a medieval setting." }
  },
  {
    videoId: "SR6iYWJxHqs", answers: ["Bruno Mars – Grenade", "Adele – Someone Like You", "Rihanna – Diamonds", "Taylor Swift – Blank Space"], correctAnswer: "Bruno Mars – Grenade",
    music: { startTime: 65 },
    video: { startTime: 100, questionText: "Which artist is seen pulling a piano through the streets?" }
  },
  {
    videoId: "Ob7vObnFUJc", answers: ["Beyoncé – Love On Top", "Alicia Keys – Girl on Fire", "Jennifer Hudson – Spotlight", "Mary J. Blige – Family Affair"], correctAnswer: "Beyoncé – Love On Top",
    music: { startTime: 90 },
    video: { startTime: 50, questionText: "This video features a simple, studio performance with a band." }
  },
  {
    videoId: "G_sBOsh-vyI", answers: ["Muse – Supermassive Black Hole", "Radiohead – Creep (Live)", "Arctic Monkeys – R U Mine?", "Imagine Dragons – Natural"], correctAnswer: "Muse – Supermassive Black Hole",
    music: { startTime: 70 },
    video: { startTime: 45, questionText: "This video features dancers in a dark, circular room." }
  },
  {
    videoId: "aCyGvGEtOwc", answers: ["Paramore – Misery Business", "Evanescence – Going Under", "Fall Out Boy – Sugar, We’re Goin Down", "Foo Fighters – The Pretender"], correctAnswer: "Paramore – Misery Business",
    music: { startTime: 65 },
    video: { startTime: 100, questionText: "This video takes place in a high school and features a bully." }
  },
  {
    videoId: "ktvTqknDobU", answers: ["Imagine Dragons – Radioactive", "AWOLNATION – Sail", "X Ambassadors – Renegades", "Bastille – Pompeii"], correctAnswer: "Imagine Dragons – Radioactive",
    music: { startTime: 55 },
    video: { startTime: 70, questionText: "This video features a surreal underground puppet fight club." }
  },
  {
    videoId: "iX_TFkut1PM", answers: ["Celine Dion – All By Myself", "Whitney Houston – I Have Nothing", "Mariah Carey – Hero", "Adele – Love in the Dark"], correctAnswer: "Celine Dion – All By Myself",
    music: { startTime: 92 },
    video: { startTime: 150, questionText: "Which singer performs alone in a grand, empty room in this video?" }
  },
  {
    videoId: "KWZGAExj-es", answers: ["Sia – Elastic Heart", "Billie Eilish – Happier Than Ever", "Florence + The Machine – Big God", "Halsey – Without Me"], correctAnswer: "Sia – Elastic Heart",
    music: { startTime: 70 },
    video: { startTime: 110, questionText: "This video features a dance-fight in a giant cage." }
  },
  {
    videoId: "8jzDnsjYv9A", answers: ["Sam Smith – Writing’s On The Wall", "Lewis Capaldi – Before You Go", "Ed Sheeran – Perfect", "James Arthur – Say You Won’t Let Go"], correctAnswer: "Sam Smith – Writing’s On The Wall",
    music: { startTime: 85 },
    video: { startTime: 120, questionText: "This is the title sequence from James Bond film" }
  },
  {
    videoId: "G133kjKy91U", answers: ["Paramore – All I Wanted", "Evanescence – Lithium", "Flyleaf – All Around Me", "No Doubt – Don't Speak"], correctAnswer: "Paramore – All I Wanted",
    music: { startTime: 68 },
    video: { startTime: 150, questionText: "This video is a live performance of which powerful rock ballad?" }
  },
  {
    videoId: "W-8XazK6NZo", answers: ["Dimash Kudaibergen – SOS d'un terrien en détresse", "Andrea Bocelli – Con te partirò", "Josh Groban – You Raise Me Up", "Il Volo – Grande Amore"], correctAnswer: "Dimash Kudaibergen – SOS d'un terrien en détresse",
    music: { startTime: 50 },
    video: { startTime: 120, questionText: "This is a famous live performance of which powerful French song?" }
  },
  {
    videoId: "36ncula-IDw", answers: ["Queen – The Show Must Go On (Live)", "Bon Jovi – Livin’ on a Prayer (Live)", "Aerosmith – Dream On (Live)", "Guns N' Roses – Sweet Child O' Mine (Live)"], correctAnswer: "Queen – The Show Must Go On (Live)",
    music: { startTime: 85 },
    video: { startTime: 150, questionText: "This is a live performance of which iconic song?" }
  },
  {
  videoId: "DyDfgMOUjCI", answers: ["Billie Eilish - Bad Guy", "Lorde - Royals", "Olivia Rodrigo - Good 4 U", "Doja Cat - Say So"], correctAnswer: "Billie Eilish - Bad Guy",
  music: { startTime: 22 },
  video: { startTime: 60, questionText: "This neon-lit nightmare video belongs to which Gen Z icon?" }
},
{
  videoId: "OWbDJXtHNjg", answers: ["Beyoncé - Formation", "Rihanna - Work", "Nicki Minaj - Anaconda", "Cardi B - WAP"], correctAnswer: "Beyoncé - Formation",
  music: { startTime: 40 },
  video: { startTime: 80, questionText: "This powerful video was filmed in New Orleans and features which anthem?" }
},
{
  videoId: "RgKAFK5djSk", answers: ["The Weeknd - Can't Feel My Face", "Bruno Mars - Uptown Funk", "Daft Punk - Get Lucky", "Pharrell Williams - Blurred Lines"], correctAnswer: "The Weeknd - Can't Feel My Face",
  music: { startTime: 35 },
  video: { startTime: 90, questionText: "This retro club video features which artist literally on fire?" }
},
{
  videoId: "lp-EO5I60KA", answers: ["Tame Impala - Elephant", "MGMT - Electric Feel", "Foster the People - Pumped Up Kicks", "Alt-J - Breezeblocks"], correctAnswer: "Tame Impala - Elephant",
  music: { startTime: 45 },
  video: { startTime: 70, questionText: "This psychedelic reverse-motion video is by which indie band?" }
},
{
  videoId: "6Ejga4kJUts", answers: ["Arcade Fire - The Suburbs", "Vampire Weekend - A-Punk", "The Strokes - Last Nite", "Franz Ferdinand - Take Me Out"], correctAnswer: "Arcade Fire - The Suburbs",
  music: { startTime: 60 },
  video: { startTime: 100, questionText: "This suburban dystopia video won a Grammy for which indie rock band?" }
},
{
  videoId: "u1xrNaTO1bI", answers: ["Twenty One Pilots - Heathens", "Imagine Dragons - Radioactive", "Fall Out Boy - Centuries", "Panic! At The Disco - High Hopes"], correctAnswer: "Twenty One Pilots - Heathens",
  music: { startTime: 50 },
  video: { startTime: 85, questionText: "This prison-themed video was made for which movie soundtrack?" }
},
{
  videoId: "hLQl3WQQoQ0", answers: ["Adele - Someone Like You", "Sam Smith - Stay With Me", "Lewis Capaldi - Someone You Loved", "Ed Sheeran - Thinking Out Loud"], correctAnswer: "Adele - Someone Like You",
  music: { startTime: 70 },
  video: { startTime: 45, questionText: "This simple black and white performance video features which heartbreaking ballad?" }
},
{
  videoId: "lWA2pjMjpBs", answers: ["Radiohead - Daydreaming", "Thom Yorke - Hearing Damage", "Atoms for Peace - Default", "Radiohead - Lotus Flower"], correctAnswer: "Radiohead - Daydreaming",
  music: { startTime: 80 },
  video: { startTime: 120, questionText: "This surreal journey through doors and spaces is from which Radiohead song?" }
},
{
  videoId: "nfs8NYg7yQM", answers: ["Lorde - Green Light", "Billie Eilish - Therefore I Am", "Clairo - Pretty Girl", "Phoebe Bridgers - Motion Sickness"], correctAnswer: "Lorde - Green Light",
  music: { startTime: 55 },
  video: { startTime: 90, questionText: "This bathroom dance party video marked which artist's return?" }
},
{
  videoId: "mRD0-GxqHVo", answers: ["Glass Animals - Heat Waves", "Tame Impala - The Less I Know The Better", "MGMT - Kids", "Phoenix - 1901"], correctAnswer: "Glass Animals - Heat Waves",
  music: { startTime: 65 },
  video: { startTime: 110, questionText: "This video features a man pulling speakers through various locations for which indie band?" }
},
{
  videoId: "pt8VYOfr8To",
  answers: ["Britney Spears - Work Bitch","Lady Gaga - G.U.Y.","Christina Aguilera - Your Body","Katy Perry - Roar"],correctAnswer: "Britney Spears - Work Bitch",
  music: { startTime: 15 },
  video: {startTime: 40,questionText: "Which pop icon commands 'You better work' in this high-energy, desert-set music video filled with luxury cars and dancers?"}
},
{
  videoId: "8pm_KoguqPM", answers: ["Tyler, The Creator - EARFQUAKE", "Frank Ocean - Nights", "Brockhampton - Sugar", "Vince Staples - Big Fish"], correctAnswer: "Tyler, The Creator - EARFQUAKE",
  music: { startTime: 40 },
  video: { startTime: 75, questionText: "This colorful, retro-styled video features which hip-hop artist?" }
},
{
  videoId: "YnwsMEabmSo", answers: ["Tones and I - Dance Monkey", "Dua Lipa - Physical", "The Weeknd - Save Your Tears", "Doja Cat - Say So"], correctAnswer: "Tones and I - Dance Monkey",
  music: { startTime: 30 },
  video: { startTime: 65, questionText: "This street performance video became a global hit for which Australian artist?" }
},
{
  videoId: "pok8H_KF1FA",
  answers: [
    "Doja Cat - Say So",
    "Dua Lipa - Don't Start Now",
    "Saweetie - Tap In",
    "Megan Thee Stallion - Savage"
  ],
  correctAnswer: "Doja Cat - Say So",
  music: { startTime: 35 },
  video: {
    startTime: 60,
    questionText: "Which artist performs a retro-inspired dance routine in a shimmering apartment and on a rooftop in this viral hit video?"
  }
},
{
  videoId: "L3wKzyIN1yk", answers: ["Bad Bunny - Dakiti", "J Balvin - Mi Gente", "Ozuna - Taki Taki", "Maluma - Hawái"], correctAnswer: "Bad Bunny - Dakiti",
  music: { startTime: 55 },
  video: { startTime: 90, questionText: "This futuristic reggaeton video features which Puerto Rican superstar?" }
},
{
  videoId: "gOMhN-hfMtY", answers: ["Doja Cat - Say So", "Megan Thee Stallion - WAP", "Cardi B - Up", "Saweetie - Best Friend"], correctAnswer: "Doja Cat - Say So",
  music: { startTime: 35 },
  video: { startTime: 70, questionText: "This pastel-colored dance video sparked a TikTok craze for which artist?" }
},
{
  videoId: "YQHsXMglC9A", answers: ["Adele - Hello", "Alicia Keys - If I Ain't Got You", "Leona Lewis - Bleeding Love", "Christina Aguilera - Beautiful"], correctAnswer: "Adele - Hello",
  music: { startTime: 88 },
  video: { startTime: 30, questionText: "This sepia-toned video features a flip phone and a house in the woods." }
},
{
  videoId: "JFm7YDVlqnI", answers: ["The Chainsmokers - Closer", "Calvin Harris - Feel So Close", "Avicii - Wake Me Up", "Swedish House Mafia - Don't You Worry Child"], correctAnswer: "The Chainsmokers - Closer",
  music: { startTime: 60 },
  video: { startTime: 95, questionText: "This college party video features which EDM duo's biggest hit?" }
},
{
  videoId: "nntGTK2Fhb0", answers: ["Ariana Grande - Thank U, Next", "Taylor Swift - Look What You Made Me Do", "Selena Gomez - Lose You to Love Me", "Dua Lipa - Don't Start Now"], correctAnswer: "Ariana Grande - Thank U, Next",
  music: { startTime: 50 },
  video: { startTime: 120, questionText: "This video recreates scenes from famous movies like Mean Girls and Legally Blonde." }
},
{
  videoId: "kOHB85vDuow", answers: ["Olivia Rodrigo - Drivers License", "Billie Eilish - Your Power", "Phoebe Bridgers - I Know The End", "Clairo - Sofia"], correctAnswer: "Olivia Rodrigo - Drivers License",
  music: { startTime: 40 },
  video: { startTime: 80, questionText: "This suburban driving video launched which teenage pop star to fame?" }
}
];