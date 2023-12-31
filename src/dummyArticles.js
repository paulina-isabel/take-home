const dummyArticles = [
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "From CNN's Allison Morrow",
      "title": "Sam Bankman-Fried testifies he called 'some of the' shots at FTX - CNN",
      "description": "Former crypto billionaire Sam Bankman-Fried, 31, took the witness stand again Monday as his criminal fraud trial continues in Manhattan. He faces life in prison if found guilty of all seven counts of federal fraud and conspiracy.",
      "url": "https://www.cnn.com/business/live-news/sbf-crypto-fraud-trial-10-30/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230120095706-05-sam-bankman-fried-010323-super-tease.jpg",
      "publishedAt": "2023-10-30T20:24:49Z",
      "content": "Assistant US Attorney Danielle Sassoon's pointed cross-examination continued after a break for lunch, in the form of short rapid-fire questions about what Bankman-Fried knew as the head of FTX versus… [+1147 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Jonathan Vanian",
      "title": "Pinterest jumps 11% on better-than-expected third-quarter results - CNBC",
      "description": "Pinterest topped analysts' estimates for earnings and revenue in the third quarter",
      "url": "https://www.cnbc.com/2023/10/30/pinterest-pins-q3-earnings-report-2023.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/105918215-1558041844751gettyimages-1143514672.jpeg?v=1698690732&w=1920&h=1080",
      "publishedAt": "2023-10-30T20:08:45Z",
      "content": "Pinterest reported third-quarter earnings on Monday that beat on the top and bottom lines. The stock jumped more than 11% in extended trading. \r\nHere's how the company did:\r\n<ul><li>Revenue: $763.2 m… [+2478 chars]"
  },
  {
      "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
      },
      "author": "Miles Kruppa, Jan Wolfe",
      "title": "Google's Sundar Pichai Tells Court Search Dominance Is Result of 'Fierce Competition' - WSJ - The Wall Street Journal",
      "description": "Sundar Pichai says search giant realized early on that browsers were critical to how people use the web",
      "url": "https://www.wsj.com/tech/google-ceo-sundar-pichai-testimony-antitrust-c490c696",
      "urlToImage": "https://images.wsj.net/im-877868/social",
      "publishedAt": "2023-10-30T20:07:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Amanda Macias, Karen Gilchrist, Natasha Turak",
      "title": "Israel-Hamas war live updates: Israel confirms a hostage was freed during a ground operation; Netanyahu dubs Hamas hostage video cruel 'propaganda' - CNBC",
      "description": "Israel has pledged to continue its \"large scale, significant strikes\" in pursuit of Hamas militants responsible for the Oct. 7 carnage.",
      "url": "https://www.cnbc.com/2023/10/30/israel-hamas-war-live-updates-latest-news-on-gaza-conflict.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107325581-1698686659285-gettyimages-1753924976-AA_30102023_1401271.jpeg?v=1698686740&w=1920&h=1080",
      "publishedAt": "2023-10-30T20:05:00Z",
      "content": "An Israeli tank and armored vehicle struck a civilian car on a crucial road running from north to south near Gaza City, according to Palestinian eyewitnesses and a video whose geolocation has been ve… [+1283 chars]"
  },
  {
      "source": {
          "id": "financial-times",
          "name": "Financial Times"
      },
      "author": "Peter Wells, Maxine Kelly, Jonathan Wheatley, Steff Chávez, Oliver Ralph, Alexandra White",
      "title": "Israel conflict latest: US criticises Putin for not condemning antisemitic riot in Dagestan - Financial Times",
      "description": null,
      "url": "https://www.ft.com/content/d1e902bf-9187-413d-bd7e-baa1f060d8ae",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F562c4a8f-c7d9-452d-a7e2-5b9035c2121b.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
      "publishedAt": "2023-10-30T19:55:36Z",
      "content": "Hamas has released a video of three of the 239 hostages held in Gaza, in which one said that Israeli prime minister Benjamin Netanyahu should release Palestinian prisoners so she and the other captiv… [+699 chars]"
  },
  {
      "source": {
          "id": "espn",
          "name": "ESPN"
      },
      "author": null,
      "title": "Sources - Giants trade DL Leonard Williams to Seahawks - ESPN - ESPN",
      "description": "The New York Giants traded defensive lineman Leonard Williams to the Seattle Seahawks on Monday.",
      "url": "https://www.espn.com/nfl/story/_/id/38780715/sources-giants-trade-dl-leonard-williams-seahawks",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1030%2Fr1246072_1296x729_16%2D9.jpg",
      "publishedAt": "2023-10-30T19:46:00Z",
      "content": "Oct 30, 2023, 02:46 PM ET\r\nThe New York Giants traded defensive lineman Leonard Williams to the Seattle Seahawks on Monday in exchange for a pair of draft picks.\r\nIn exchange for Williams, the Seahaw… [+3331 chars]"
  },
  {
      "source": {
          "id": "associated-press",
          "name": "Associated Press"
      },
      "author": "NAJIB JOBAIN, SAMY MAGDY, LEE KEATH",
      "title": "Israel pushes deeper into Gaza and frees Hamas captive; Netanyahu rejects calls for cease-fire - The Associated Press",
      "description": "Israeli ground forces pushed deeper into Gaza, advancing in tanks and other armored vehicles on the territory’s main city and freeing a soldier held captive by Hamas militants. The Israeli prime minister rejected calls for a cease-fire Monday, even as airstri…",
      "url": "https://apnews.com/article/israel-palestinians-hamas-gaza-war-news-10-30-2023-131e9537aaad8e74586cc114d2668e5a",
      "urlToImage": "https://dims.apnews.com/dims4/default/987d503/2147483647/strip/true/crop/5688x3200+0+296/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F76%2Fdab1c63dff160e68ab0058a718af%2F0fb049d6667e497f8d8a205460b2e8c0",
      "publishedAt": "2023-10-30T19:39:00Z",
      "content": "KHAN YOUNIS, Gaza Strip (AP) Israeli ground forces pushed deeper into Gaza on Monday, advancing in tanks and other armored vehicles on the territorys main city and freeing a soldier held captive by H… [+7700 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
  },
  {
      "source": {
          "id": null,
          "name": "KCRA Sacramento"
      },
      "author": "Daniel Macht",
      "title": "Placer County confirms 1st West Nile virus death since 2018 - KCRA Sacramento",
      "description": "A Lincoln man has been confirmed as the first West Nile virus death in Placer County since 2018, health officials said.",
      "url": "https://www.kcra.com/article/placer-county-confirms-1st-west-nile-virus-death-since-2018/45687629",
      "urlToImage": "https://kubrick.htvapps.com/vidthumb/321aa159-7c80-4687-b84d-aaac63c80e92/5bae2ac3-b955-48ac-993a-a05ad4af96a5.jpg?crop=0.760xw:0.761xh;0.0785xw,0&resize=1200:*",
      "publishedAt": "2023-10-30T19:18:00Z",
      "content": "A Lincoln man has been confirmed as the first West Nile virus death in Placer County since 2018, health officials said. \r\nPlacer County public health officials said Monday that the man was over the a… [+914 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "MacRumors"
      },
      "author": "Eric Slivka",
      "title": "October 2023 Apple Event Spoiler-Free Video Stream - MacRumors",
      "description": "Apple's \"Scary Fast\" virtual media event kicks off at 5:00 pm Pacific Time today, an unusual time for an Apple event that will see it...",
      "url": "https://www.macrumors.com/2023/10/30/october-2023-spoiler-free/",
      "urlToImage": "https://images.macrumors.com/t/koSfRQp8Hj4Rjak2xJGXdEX4DMQ=/2500x/article-new/2023/10/apple-october-scary-fast-event.jpg",
      "publishedAt": "2023-10-30T19:01:13Z",
      "content": "Apple's \"Scary Fast\" virtual media event kicks off at 5:00 pm Pacific Time today, an unusual time for an Apple event that will see it occurring in the middle of the night for some users not tradition… [+950 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hollywood Reporter"
      },
      "author": "Ryan Gajewski",
      "title": "‘Hunger Games’ Prequel Nabs SAG-AFTRA Interim Agreement - Hollywood Reporter",
      "description": "Lionsgate will now have promotional support from the cast for the Francis Lawrence-directed feature that hits theaters Nov. 17.",
      "url": "https://www.hollywoodreporter.com/movies/movie-news/hunger-games-prequel-sag-aftra-interim-agreement-1235632637/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/BOSS_UNIT_220920_01273_R_rgb-H-2023.jpg?w=1024",
      "publishedAt": "2023-10-30T18:59:06Z",
      "content": "The forthcoming prequel in the Hunger Games franchise has landed an interim agreement from SAG-AFTRA ahead of its release next month. \r\nThis means that The Hunger Games: The Ballad of Songbirds &amp;… [+1781 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Israel's Netanyahu condemns 'cruel' Hamas video of Israeli hostages - BBC.com",
      "description": "Footage shows three female hostages berating Benjamin Netanyahu for failing to secure their release.",
      "url": "https://www.bbc.com/news/world-middle-east-67265915",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6078/production/_131569642_05a849d9c89adc57e2e8a0daa4f8d9c567c372bb.jpg",
      "publishedAt": "2023-10-30T18:27:16Z",
      "content": "Israeli Prime Minister Benjamin Netanyahu has condemned as \"cruel propaganda\" a video released by Hamas showing Israeli hostages taken during the 7 October attacks. \r\nThe clip, released on Monday, sh… [+3262 chars]"
  },
  {
      "source": {
          "id": "associated-press",
          "name": "Associated Press"
      },
      "author": "TOM KRISHER",
      "title": "General Motors reaches tentative agreement with UAW, potentially ending six-week strike - The Associated Press",
      "description": "General Motors and the United Auto Workers union have reached a tentative contract agreement that could end a six-week-old strike against Detroit automakers, three people briefed on the deal said. The agreement follows the pattern set with Ford last week and …",
      "url": "https://apnews.com/article/general-motors-ford-stellantis-uaw-strike-34f6f0d7ca32a671783594722b20fb24",
      "urlToImage": "https://dims.apnews.com/dims4/default/a7fee0b/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8a%2Fb5%2F0f3fe79730c215484c65b99143cc%2F7681eb2a4a1a4e5eaf4cddb9e1785eda",
      "publishedAt": "2023-10-30T18:26:00Z",
      "content": "DETROIT (AP) Facing the loss of another $200 million this week to a lengthy strike, General Motors CEO Mary Barra wrapped up her weekend by going to the United Auto Workers Detroit headquarters inten… [+8014 chars]"
  },
  {
      "source": {
          "id": "abc-news",
          "name": "ABC News"
      },
      "author": "Kiara Alfonseca",
      "title": "Man pleads not guilty to hate crime in fatal stabbing of 6-year-old Muslim boy in Illinois - ABC News",
      "description": "Joseph Czuba is charged with murder, attempted murder, hate crimes and more.",
      "url": "https://abcnews.go.com/US/man-pleads-not-guilty-hate-crime-fatal-stabbing-6/story?id=104476991",
      "urlToImage": "https://i.abcnewsfe.com/a/4a43def5-8186-4951-90cd-82b08e21de5a/czuba_1697416072277_hpMain_16x9.jpg?w=992",
      "publishedAt": "2023-10-30T17:49:33Z",
      "content": "An Illinois man pleaded not guilty Monday in the fatal stabbing of a 6-year-old Muslim boy in Plainfield -- allegedly over the Hamas-Israel conflict -- earlier this month, according to Chicago ABC st… [+2194 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Rosa Flores, Sara Weisfeldt",
      "title": "Federal judge grants Texas’ motion to temporarily stop the Biden administration from removing razor wire at the US-Mexico border - CNN",
      "description": "a federal judge on Monday granted Texas’ motion",
      "url": "https://www.cnn.com/2023/10/30/politics/texas-biden-wire-mexico-border-federal-order/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231030130106-border-razor-wire-cutting-0924.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-10-30T17:21:00Z",
      "content": "A federal judge on Monday granted Texas motion to temporarily stop the Biden administration from removing the razor wire at the US-Mexico border, pending a preliminary injunction hearing.\r\nThe tempor… [+2246 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CBS Sports"
      },
      "author": "",
      "title": "Jim Harbaugh finally addresses Michigan sign-stealing investigation, contract status: 'Let it play out' - CBS Sports",
      "description": "Michigan has been the subject of an NCAA investigation into an alleged sign-stealing scheme",
      "url": "https://www.cbssports.com/college-football/news/jim-harbaugh-finally-addresses-michigan-sign-stealing-investigation-contract-status-let-it-play-out/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/30/f0ee03d8-321d-4dda-b30a-3492c10da44c/thumbnail/1200x675/f11280bb351b59da0151628b2b1f0228/harbaugh-michigan-state.jpg",
      "publishedAt": "2023-10-30T17:20:00Z",
      "content": "Michigan coach Jim Harbaugh has finally broken his silence on the NCAA's investigation into widespread allegations of sign stealing within the program. To this point, the face of the controversy has … [+1991 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Robert Picheta",
      "title": "Shani Louk, 23-year-old kidnapped from music festival, found dead, Israel says - CNN",
      "description": "A 23-year-old German-Israeli woman who was kidnapped from the Nova music festival by Hamas militants on October 7 has been found dead, the Israeli Ministry of Foreign Affairs has said.",
      "url": "https://www.cnn.com/2023/10/30/middleeast/shani-louk-dead-israel-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/e9368111-e82e-4e09-95f2-454b78ff545f.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-10-30T17:17:00Z",
      "content": "A 23-year-old German-Israeli woman who was kidnapped from the Nova music festival by Hamas militants on October 7 has been found dead, the Israeli Ministry of Foreign Affairs has said.\r\nWe are devast… [+4684 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "AZCentral"
      },
      "author": "Jeremy Cluff",
      "title": "NFL Week 9 picks, predictions for every game on this week's schedule - The Arizona Republic",
      "description": "Predicting the winner of the Dolphins vs. Chiefs, Seahawks vs. Ravens, Cowboys vs. Eagles, Bills vs. Bengals and every other NFL Week 9 schedule game.",
      "url": "https://www.azcentral.com/story/sports/nfl/2023/10/30/nfl-week-9-picks-predictions-2023-season/71382684007/",
      "urlToImage": "https://www.azcentral.com/gcdn/presto/2020/12/19/NSHT/73db3303-d5dd-42da-a4d3-33abbba3e80a-AP20348706278432.jpg?crop=4454,2506,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2023-10-30T17:15:15Z",
      "content": "The NFL schedule provides some must-see games every week.\r\nThe NFL Week 9 schedule is no exception. In fact, it might have more than its normal share of games that would qualify as must-watch matchup… [+6823 chars]"
  },
  {
      "source": {
          "id": "associated-press",
          "name": "Associated Press"
      },
      "author": "ALANNA DURKIN RICHER, ERIC TUCKER",
      "title": "What Trump can say and can't say under a gag order in his federal 2020 election interference case - The Associated Press",
      "description": "The gag order in Donald Trump's 2020 election interference case in Washington bars him and anyone else involved in the case from making public statements targeting prosecutors, court staff or “any reasonably foreseeable witness.” The order does not name poten…",
      "url": "https://apnews.com/article/donald-trump-gag-order-what-to-know-8b045bab3bd8ecebef2c9cf74a11c357",
      "urlToImage": "https://dims.apnews.com/dims4/default/e7aeecd/2147483647/strip/true/crop/4318x2429+0+225/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa3%2Fb8%2F21f09f9cd63f9948fc88061636af%2F1b92856bb4b84e3b8fa00e8963227c26",
      "publishedAt": "2023-10-30T17:14:00Z",
      "content": "WASHINGTON (AP) A gag order in Donald Trumps election interference case in Washington is back in place, restricting the former presidents inflammatory rhetoric as he prepares for trial and campaigns … [+6745 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Variety"
      },
      "author": "Rebecca Rubin",
      "title": "Box Office: ‘Five Nights at Freddy’s’ $80 Million Debut Ties ‘Black Widow’ for Biggest Release in Theaters and Streaming - Variety",
      "description": "\"Five Nights at Freddy's\" scared up $80 million at the domestic box office, above Sunday's already-huge estimate of $78 million.",
      "url": "https://variety.com/2023/film/news/box-office-five-nights-at-freddys-ties-black-widow-biggest-release-theaters-streaming-1235773018/",
      "urlToImage": "https://variety.com/wp-content/uploads/2023/10/five-nights.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2023-10-30T16:48:00Z",
      "content": "“Five Nights at Freddy’s” scared up $80 million at the domestic box office in its first weekend of release, above Sunday’s already-huge estimate of $78 million.\r\nUniversal and Blumhouse released the … [+2836 chars]"
  }
]

export default dummyArticles;