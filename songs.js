const questions = [
  // Każdy obiekt jest teraz uniwersalny i zawiera dane do pytania muzycznego i wideo.
  // Dane zostały przetworzone i uzupełnione z całej Twojej listy.
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
    videoId: "8SbUC-UaAxE", answers: ["Guns N' Roses - November Rain", "Meat Loaf - I'd Do Anything for Love", "Bon Jovi - Always", "Aerosmith - Cryin'"], correctAnswer: "Guns N' Roses - November Rain",
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
  "videoId": "cjIvu7e6Wq8",
  "answers": [
    "Missy Elliott - Work It",
    "Sia - Elastic Heart",
    "Lil' Kim - The Jump Off",
    "Eve - Let Me Blow Ya Mind"
  ],
  "correctAnswer": "Missy Elliott - Work It",
  "music": { "startTime": 0 },
  "video": {
    "startTime": 10,
    "questionText": "This song is famous for its reversed lyrics and won the MTV Video Music Award for Video of the Year in 2003."
  }
},
  {
    videoId: "VYOjWnS4cMY", answers: ["Childish Gambino - This Is America", "Janelle Monáe - Make Me Feel", "Kendrick Lamar - HUMBLE.", "Kanye West - Famous"], correctAnswer: "Childish Gambino - This Is America",
    music: { startTime: 155 },
    video: { startTime: 155, questionText: "This powerful, viral video is for which song?" }
  },
  {
    videoId: "1-xGerv5FOk", answers: ["The Verve - Bitter Sweet Symphony", "Oasis - Wonderwall", "Blur - Coffee & TV", "R.E.M. - Everybody Hurts"], correctAnswer: "The Verve - Bitter Sweet Symphony",
    music: { startTime: 68 },
    video: { startTime: 50, questionText: "Which band walks in slow-motion in this famous one-shot video?" }
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
    videoId: "k2qgadSvNyU", answers: ["Dua Lipa - New Rules", "Ariana Grande - No Tears Left To Cry", "Camila Cabello - Havana", "Rita Ora - Anywhere"], correctAnswer: "Dua Lipa - New Rules",
    music: { startTime: 50 },
    video: { startTime: 115, questionText: "This viral music video, featuring a group of friends supporting each other in a hotel, is for which song?" }
  },
  {
    videoId: "tvTRZJ-4EyI", answers: ["Kendrick Lamar - HUMBLE.", "Drake - God's Plan", "J. Cole - Middle Child", "Tyler, The Creator - See You Again"], correctAnswer: "Kendrick Lamar - HUMBLE.",
    music: { startTime: 50 },
    video: { startTime: 150, questionText: "This surreal 'last supper' scene is from which video?" }
  },
  {
    videoId: "uxpDa-c-4Mc", answers: ["Drake - Hotline Bling", "The Weeknd - Can't Feel My Face", "Post Malone - Circles", "Kanye West - Stronger"], correctAnswer: "Drake - Hotline Bling",
    music: { startTime: 90 },
    video: { startTime: 75, questionText: "Which artist's unique dancing in colorful boxes made this video a viral sensation?" }
  },
  {
    videoId: "My2FRPA3Gf8", answers: ["Miley Cyrus - Wrecking Ball", "Katy Perry - Roar", "Lady Gaga - Paparazzi", "Sia - Elastic Heart"], correctAnswer: "Miley Cyrus - Wrecking Ball",
    music: { startTime: 55 },
    video: { startTime: 80, questionText: "Which song is featured in this music video where the artist smashes walls with a sledgehammer?" }
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
    videoId: "jRGrNDV2mKc", answers: ["Korn - Freak on a Leash", "Slipknot - Duality",
    "Linkin Park - In the End",
    "System Of A Down - Chop Suey!"], correctAnswer: "Korn - Freak on a Leash",
    music: { startTime: 180 },
    video: { startTime: 80, questionText: "Which song's video follows a bullet through animated and real worlds?" }
  },
  {
    videoId: "vabnZ9-ex7o", answers: ["Nirvana - Come As You Are", "Pearl Jam - Alive",
    "Soundgarden - Black Hole Sun",
    "Alice In Chains - Man in the Box"], correctAnswer: "Nirvana - Come As You Are",
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
    video: { startTime: 80, questionText: "This nighttime drive through a city is from which hit song?" }
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
    video: { startTime: 88, questionText: "This sepia-toned video features a flip phone and a house in the woods." }
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
    videoId: "BQ0mxQXmLsk", answers: ["Camila Cabello – Havana", "Selena Gomez – Wolves", "Dua Lipa – New Rules", "Billie Eilish – Ocean Eyes"], correctAnswer: "Camila Cabello – Havana",
    music: { startTime: 38 },
    video: { startTime: 200, questionText: "Which song is featured in this music video where the artist plays multiple roles." }
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
    videoId: "Xsp3_a-PMTw", answers: ["Muse – Supermassive Black Hole", "Radiohead – Creep (Live)", "Arctic Monkeys – R U Mine?", "Imagine Dragons – Natural"], correctAnswer: "Muse – Supermassive Black Hole",
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
    videoId: "NGrLb6W5YOM", answers: ["Celine Dion – All By Myself", "Whitney Houston – I Have Nothing", "Mariah Carey – Hero", "Adele – Love in the Dark"], correctAnswer: "Celine Dion – All By Myself",
    music: { startTime: 92 },
    video: { startTime: 150, questionText: "Which singer performs alone in a grand, empty room in this video?" }
  },
  {
    videoId: "KWZGAExj-es", answers: ["Sia – Elastic Heart", "Billie Eilish – Happier Than Ever", "Florence + The Machine – Big God", "Halsey – Without Me"], correctAnswer: "Sia – Elastic Heart",
    music: { startTime: 70 },
    video: { startTime: 110, questionText: "This video features a dance-fight in a giant cage." }
  },
  {
    videoId: "-Kn1eKZJUHE", answers: ["Sam Smith – Writing’s On The Wall", "Lewis Capaldi – Before You Go", "Ed Sheeran – Perfect", "James Arthur – Say You Won’t Let Go"], correctAnswer: "Sam Smith – Writing’s On The Wall",
    music: { startTime: 85 },
    video: { startTime: 70, questionText: "This is the title sequence for which James Bond film?" }
  },
  {
    videoId: "36ncula-IDw", answers: ["Queen – The Show Must Go On (Live)", "Bon Jovi – Livin’ on a Prayer (Live)", "Aerosmith – Dream On (Live)", "Guns N' Roses – Sweet Child O' Mine (Live)"], correctAnswer: "Queen – The Show Must Go On (Live)",
    music: { startTime: 85 },
    video: { startTime: 150, questionText: "This is a live performance of which iconic song?" }
  },
  // NOWE UTWORY
  {
    videoId: "NUTGr5t3MoY", answers: ["Green Day - Basket Case", "The Offspring - Self Esteem", "Blink-182 - What's My Age Again?", "Sum 41 - Fat Lip"], correctAnswer: "Green Day - Basket Case",
    music: { startTime: 50 },
    video: { startTime: 20, questionText: "This video is famously set in a mental institution." }
  },
  {
    videoId: "DyDfgMOUjCI", answers: ["Billie Eilish – Bad Guy", "Lorde – Royals", "Olivia Rodrigo – Good 4 U", "Doja Cat – Say So"], correctAnswer: "Billie Eilish – Bad Guy",
    music: { startTime: 22 },
    video: { startTime: 65, questionText: "Which artist sits on the edge of a bed in this minimalist, colorful video?" }
  },
  {
    videoId: "QtTR-_Klcq8", answers: ["The Offspring - Pretty Fly (for a White Guy)", "Limp Bizkit - Nookie", "Smash Mouth - All Star", "Bloodhound Gang - The Bad Touch"], correctAnswer: "The Offspring - Pretty Fly (for a White Guy)",
    music: { startTime: 25 },
    video: { startTime: 40, questionText: "Which video follows a wannabe gangster driving through town?" }
  },
  {
  videoId: "RgKAFK5djSk",
  answers: [
    "Wiz Khalifa – See You Again ft. Charlie Puth",
    "Drake – God’s Plan",
    "Post Malone – Circles",
    "Maroon 5 – Memories"
  ],
  correctAnswer: "Wiz Khalifa – See You Again ft. Charlie Puth",
  music: { startTime: 10 },
  video: {
    startTime: 170,
    questionText: "Which music video features the artist rapping on a cliff overlooking Los Angeles at sunset intercut with scenes from a blockbuster car franchise?"
  }
},
  {
    videoId: "1w7OgIMMRc4", answers: ["Guns N' Roses - Sweet Child O' Mine", "Mötley Crüe - Home Sweet Home", "Def Leppard - Pour Some Sugar On Me", "Bon Jovi - You Give Love a Bad Name"], correctAnswer: "Guns N' Roses - Sweet Child O' Mine",
    music: { startTime: 48 },
    video: { startTime: 120, questionText: "This video intercuts live performance with shots of the band's girlfriends." }
  },
  {
  videoId: "lp-EO5I60KA",
  answers: [
    "Ed Sheeran – Thinking Out Loud",
    "Justin Timberlake – Mirrors",
    "Bruno Mars – Just the Way You Are",
    "Sam Smith – Stay With Me"
  ],
  correctAnswer: "Ed Sheeran – Thinking Out Loud",
  music: { startTime: 15 },
  video: {
    startTime: 0,
    questionText: "Which music video features singer performing a ballroom dance with a professional partner in an ornate, empty ballroom?"
  }
},
  {
    videoId: "6Ejga4kJUts", answers: ["The Cranberries - Zombie", "R.E.M. - Losing My Religion", "The Smashing Pumpkins - Disarm", "U2 - Sunday Bloody Sunday"], correctAnswer: "The Cranberries - Zombie",
    music: { startTime: 29 },
    video: { startTime: 110, questionText: "This video features a singer covered in gold paint." }
  },
  {
  videoId: "hLQl3WQQoQ0",
  answers: [
    "Adele – Someone Like You",
    "Rihanna – Stay",
    "Sam Smith – Stay With Me",
    "Ed Sheeran – Photograph"
  ],
  correctAnswer: "Adele – Someone Like You",
  music: { startTime: 0 },
  video: {
    startTime: 30,
    questionText: "Which music video features this iconic black-and-white performance of the singer at a piano in an empty arena?"
  }
},
  {
    videoId: "oygrmJFKYZY", answers: ["Dua Lipa - Don't Start Now", "Lady Gaga - Stupid Love", "Doja Cat - Say So", "The Weeknd - In Your Eyes"], correctAnswer: "Dua Lipa - Don't Start Now",
    music: { startTime: 50 },
    video: { startTime: 135, questionText: "This video is set in a vibrant, packed nightclub." }
  },
{
    videoId: "lWA2pjMjpBs",
    answers: [
      "Rihanna – Diamonds",
      "Sia – Chandelier",
      "Adele – Rolling in the Deep",
      "Beyoncé – Halo"
    ],
    correctAnswer: "Rihanna – Diamonds",
    music: { startTime: 15 },
    video: {
      startTime: 0,
      questionText: "Which music video features the artist in four elemental environments of earth, air, water, and fire?"
    }
},
  {
    videoId: "XFkzRNyygfk", answers: ["Radiohead - Creep", "Nirvana - Heart-Shaped Box", "Stone Temple Pilots - Plush", "Jeff Buckley - Hallelujah"], correctAnswer: "Radiohead - Creep",
    music: { startTime: 85 },
    video: { startTime: 125, questionText: "Which video features a band performing for an unenthusiastic crowd?" }
  },
  {
  videoId: "mRD0-GxqHVo",
  answers: [
    "Glass Animals – Heat Waves",
    "Tame Impala – The Less I Know the Better",
    "Foster the People – Sit Next to Me",
    "Arctic Monkeys – Four Out of Five"
  ],
  correctAnswer: "Glass Animals – Heat Waves",
  music: { startTime: 70 },
  video: {
    startTime: 50,
    questionText: "Which music video features the band performing on a London street while the singer drags multiple TV sets with members trapped inside?"
  }
},
  {
    videoId: "gGdGFtwCNBE", answers: ["The Killers - Mr. Brightside", "Franz Ferdinand - Take Me Out", "The Strokes - Last Nite", "Interpol - Evil"], correctAnswer: "The Killers - Mr. Brightside",
    music: { startTime: 49 },
    video: { startTime: 100, questionText: "This video tells a story of a love triangle and jealousy." }
  },
{
  videoId: "pt8VYOfr8To",
  answers: [
    "Britney Spears – Work Bitch",
    "Lady Gaga – Born This Way",
    "Katy Perry – Bon Appétit",
    "Cardi B – WAP"
  ],
  correctAnswer: "Britney Spears – Work Bitch",
  music: { startTime: 8 },
  video: {
    startTime: 44,
    questionText: "Which music video features this desert inverted-pyramid scene with flowing white fabric and circling sharks?"
  }
},
  {
    videoId: "QGJuMBdaqIw", answers: ["Katy Perry - Firework", "Taylor Swift - Shake It Off", "Rachel Platten - Fight Song", "Sara Bareilles - Brave"], correctAnswer: "Katy Perry - Firework",
    music: { startTime: 75 },
    video: { startTime: 140, questionText: "Which video features people shooting fireworks from their chests?" }
  },
  {
  videoId: "6Nb-prB-4P0",
  answers: [
    "Aaron Smith – Dancin (KRONO Remix) ft. Luvli",
    "Robin S – Show Me Love",
    "Duke Dumont – Ocean Drive",
    "Kiesza – Hideaway"
  ],
  correctAnswer: "Aaron Smith – Dancin (KRONO Remix) ft. Luvli",
  music: { startTime: 120 },
  video: {
    startTime: 120,
    questionText: "Which music video features this dancer moving to a tech house beat in a dimly lit club?"
  }
},
  {
    videoId: "YVkUvmDQ3HY", answers: ["Eminem - Without Me", "Eminem - The Real Slim Shady", "Dr. Dre - Forgot About Dre", "50 Cent - In Da Club"], correctAnswer: "Eminem - Without Me",
    music: { startTime: 65 },
    video: { startTime: 50, questionText: "Which rapper dresses up as a superhero in this video?" }
  },
  {
  videoId: "pok8H_KF1FA",
  answers: [
    "Doja Cat – Say So",
    "Bruno Mars – 24K Magic",
    "The Weeknd – Blinding Lights", 
    "Lizzo – Juice"
  ],
  correctAnswer: "Doja Cat – Say So",
  music: { startTime: 30 },
  video: {
    startTime: 15,
    questionText: "Which music video features this 70s-inspired disco dance with woman flirting in a sparkly retro mini-dress?"
  }
},
  {
    videoId: "RB-RcX5DS5A", answers: ["Coldplay - The Scientist", "Keane - Everybody's Changing", "Snow Patrol - Run", "Travis - Why Does It Always Rain on Me?"], correctAnswer: "Coldplay - The Scientist",
    music: { startTime: 60 },
    video: { startTime: 20, questionText: "This music video famously tells its story in reverse." }
  },
  {
    videoId: "L3wKzyIN1yk",
    answers: [
      "Rag'n'Bone Man – Human",
      "Hozier – Take Me to Church",
      "George Ezra – Budapest",
      "James Arthur – Say You Won't Let Go"
    ],
    correctAnswer: "Rag'n'Bone Man – Human",
    music: { startTime: 60 },
    video: {
      startTime: 120,
      questionText: "Which song features this powerful warehouse performance with morphing faces?"
    }
 },
  {
    videoId: "WM8bTdBs-cw", answers: ["Metallica - One", "Slayer - Raining Blood", "Megadeth - Holy Wars... The Punishment Due", "Pantera - Cowboys from Hell"], correctAnswer: "Metallica - One",
    music: { startTime: 260 },
    video: { startTime: 100, questionText: "This video incorporates scenes from the movie 'Johnny Got His Gun'." }
  },
  {
    videoId: "e-ORhEE9VVg", answers: ["Taylor Swift - Blank Space", "Lana Del Rey - Born to Die", "Lorde - Royals", "Halsey - Colors"], correctAnswer: "Taylor Swift - Blank Space",
    music: { startTime: 65 },
    video: { startTime: 130, questionText: "Which artist portrays a wealthy, jealous lover in this video?" }
  },
  {
    videoId: "rn_YodiJO6k", answers: ["Red Hot Chili Peppers - Otherside", "Foo Fighters - My Hero", "Pearl Jam - Do the Evolution", "Alice in Chains - Man in the Box"], correctAnswer: "Red Hot Chili Peppers - Otherside",
    music: { startTime: 55 },
    video: { startTime: 75, questionText: "This surreal, gothic-style animated video is from which band?" }
  }
];