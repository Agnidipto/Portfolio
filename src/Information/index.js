import {Typography} from '@mui/material';

const purpleStyle ={
  color: '#bfb1ff'
}

function PurpleLink(props) {
  return (
    <a href={props.href} rel='noreferrer' target='_blank' style={purpleStyle}>
      {props.children}
    </a>
  )
}

function Purple(props) {
  return(
    <span style={purpleStyle}>
      {props.children}
    </span>
  )
}

const ProjectInformation = [
  { 
    id:1,
    title : <Typography variant='h3' color='secondary.light'>
      Art-Blog Channel
    </Typography>,
    image : require('./ProjectsImages/crafts.jpg'),
    content : <Typography variant='p' sx={{fontSize:16}} >
    Website created for showcasing the Portfolio of Arts and Crafts that is made by the Client. <br/>
    React was used for front-end, alongwith Semantic for styling/designing. Spring Boot was used for creating the APIs for back-end, and PostsgreSQL for Database. <br/>
    Heroku was used for hosting it initially.
    </Typography>,
    redirectUrl : '1',
    skills : ['ReactJS', 'SpringBoot', 'Java', 'NodeJS', 'SemanticUI', 'Git', 'Redux'],
    fullContent : {
      title : <Typography variant = 'h2' color='secondary-light'>Art-Blog Channel</Typography>,
      description : <Typography variant='p'>
        A Project for a Client, who wanted to <Purple>showcase her Artworks</Purple> over the internet. This is basically an <Purple>Art Portfolio Website</Purple> where details of her artwork are stored and displayed to the ones visiting the site.<br/><br/>
        The Client wanted an initial Website to get her started into the field of Art, where Clients can approach her to purchase her creations. It is important to note that <Purple>direct payment is not currently included in the functionalities of the Application</Purple> yet. We wanted to set up the Application first, just for purposes of showcasing her works, and set up the payment functionality later on, hence this is currently being worked upon.
        
      </Typography>,
      features : <ul>
      <li><Purple>Client Information</Purple>: Provides information about the client, as well as information about the Wesbite in general.</li>
      <br/>
      <li><Purple>Product Description</Purple>: Displays information of each of her creations, data includes Pictures in a carousel, description, materials required, etc.  </li>
      <br/>
      <li><Purple>Admin dashboard</Purple>: Had a login feature for just Admins of the website, who were responsible for editing and creating new content for the Blog.</li>
      <br/>
      <li><Purple>Payment System</Purple>: As stated before, this feature is currently in progress.</li>
    </ul>,
      technology : <Typography variant='p'>
        <ul>
          <li><Purple>ReactJS</Purple> for the FrontEnd</li><br/>
          <li><Purple>Hooks</Purple> and <Purple>Redux</Purple> for State Management</li><br/>
          <li><Purple>SematicUI</Purple> for Front-End</li><br/>
          <li><Purple>SpringBoot</Purple> for back-end</li><br/>
          <li><Purple>PostsgreSQL</Purple> for Database</li>
        </ul>
      </Typography>,
      challenges: <>
      <br/>
        <Typography variant='h4' color='primary.light'>Sematic UI limited functionalities</Typography><br/>
        <Typography variant='p'>It might like seem like a weird problem to have because of so many other CSS frameworks available, and also because Semantic seems good enough for a proper Project. I was pretty adamant to stick with Semantic for this Project, because it is by far, my favourite CSS framework to use, not because of functionality, but because of the look and feel of the framework. However, there were few issues that I had faced with Semantic, which were quite nerve-racking. 
        <br/><br/>One of these were <Purple>how poorly sticky elements are implemented</Purple> in the DOM. I required Sticky elements in this project for a few things, but one thing was major out of all them. It was the <Purple>TopBar with the Side Menu</Purple>. I had to create the entire sticky element from scratch, taking the styling options from Semantic. And this actually allowed me to put in other types of functionality to the SideMenu as well. 
        <br/><br/>Another issue, that I had faced was using <Purple>Accordions</Purple> in Semantic. Somehow, that wasn't working for me, so I decided to go with <PurpleLink href='https://www.npmjs.com/package/react-collapse'>React-Collapse</PurpleLink> for that.</Typography>
        </>
    }
  },
  {
    id:2,
    title : <Typography variant='h3' color='secondary.light'>
      Real-Estate Price Prediction
    </Typography>,
    image : require('./ProjectsImages/houses.jpg'),
    content : <Typography variant='p' sx={{textAlign:'left', fontSize:16}}>
    Website Created for Predicting the House Prices in a city using Machine Learning. We used different regression models in the backend. Out of all the models we tried, turns out that multiple linear regression performed the best, hence we decided to go forward with it.
    </Typography>,
    redirectUrl : '2',
    skills : ['ReactJS', 'Flask', 'Python', 'NodeJS', 'Bootstrap', 'Git', 'NodeJS'],
    fullContent : {
      title : <Typography variant = 'h2' color='secondary-light'>Real-Estate Price Prediction</Typography>,
      description : <Typography variant='p'>
        This was a <Purple>group Project</Purple>. The Project predicts the <Purple>Prices of Houses and Real-Estate</Purple> in different areas of the city of <Purple>Bangalore</Purple> in India, based on a data set we got from <Purple>Kaggle</Purple>.<br/><br/>
        We have used <Purple>Machine Learning</Purple> for this project. We have tested the data using different regression models, but we have found that <Purple>multiple linear regression</Purple> did perform the best, hence we went ahead with it. My contributions to the project deploying the model into a Website, such that it would be exposed for people to use it. This included creating the <Purple>backend as well as frontend</Purple> for the Project.
      </Typography>,
      features : <ul>
        <li><Purple>Model Loading</Purple>: It loads the model onto the backend to be used.</li>
        <br/>
        <li><Purple>API calls</Purple>: For generating data from the model.</li>
        <br/>
        <li><Purple>Providing Predictions</Purple>: It does exactly what it says. It takes input data from user, including square footage, number  of bedrooms and bathrooms, and district of the city, and provides an estimate.</li>
      </ul>,
      technology : <Typography variant='p'>
        <ul>
          <li><Purple>ReactJS</Purple> for the FrontEnd</li><br/>
          <li><Purple>Flask</Purple> for Back-end, since the model was created as .ipynb file in Python.</li><br/>
          <li><Purple>Bootstrap</Purple> for design.</li><br/>
          <li><Purple>Heroku</Purple> for hosting back-end and front-end.</li>
        </ul>
      </Typography>,
      challenges: <>
      <br/>
        <Typography variant='h4' color='primary.light'>FastAPI hosting issues</Typography><br/>
        <Typography variant='p'>Needless to say, <Purple>since the model was created in Python</Purple>, we had to use a Python framework for the back-end. We looked at the options, including <Purple>Django</Purple>, <Purple>Flask</Purple> and <Purple>FastAPI</Purple>. And considering complexity and time efficiency, we <Purple>initially decided to go with FastAPI</Purple>. We had to consider our requirements for the application as well, since it was only a matter of exposing the Model via APIs, and not doing much else. 
        <br/><br/>We had completed the back-end in FastAPI, only to be disappointed. Our choice for hosting Platform at the time was <Purple>Heroku</Purple>, since it was free and ridiculously easy, with tons of documentation and support available across the Web. 
        <br/><br/>However, there was <Purple>no efficient way of hosting a FastAPI application</Purple>. We looked at some other alternatives for Heroku, but it was in vain. Hence we decided to go with a different framework or library altogether. <Purple>Hence, came Flask</Purple>. Which was quite easy to be hosted via Heroku.
        <br/><br/>Needless to say, our Front-End was hosted on Heroku as well.
        </Typography>
        </>
    }
  },
  {
    id:3,
    title : <Typography variant='h3' color='secondary.light'>
      Investment Portfolio
    </Typography>,
    image : require('./ProjectsImages/investments.jpg'),
    content : <Typography variant='p' sx={{textAlign:'left', fontSize:16}}>
    Self-Project for viewing and analyzing Investments made in Stock Market, including various types of visual representation of data. Application built in React, with Back-End using Flask. <br/>
    There are API Calls to 5Paisa API in back-end. And used a localized SQLite DB for Temporary Storage. The Visual graphs were made using React-vis, RechartJS and Apex Charts.
    </Typography>,
    redirectUrl : '3',
    skills : ['ReactJS', 'Flask', 'Python', 'Bootstrap', 'Git', 'React-Vis', 'RechartJS', 'Apex Charts'],
    fullContent : {
      title : <Typography variant = 'h2' color='secondary-light'>Investment Portfolio</Typography>,
      description : <Typography variant='p'>
        This was a Self Project that I came up with. This Web App is a visual representation of current and past <span style={purpleStyle}>Indian Stock Market Data</span>, along with Visual Representation of the Holdings that are currently owned by me. 
        <br/><br/>
        This Project was mainly required to perform Portfolio Analysis for myself based on Stock Market Data (NSE). Since I use <span style={purpleStyle}>5Paisa</span> as a Broker, I have used their <span style={purpleStyle}>Python SDK</span> in backend for acquiring the data. They also have APIs accessed via URLs and Node SDK as well, however I have used the Python SDK for two reasons : <br/> 
        <ol>
          <li>The SDK for NodeJS is not as good, with extremely limited functionality, and subpar documentation.</li><br/>
          <li>My Choice for backend before going into the depths of the Project was <span style={purpleStyle}>Flask</span>. So an SDK for Python would have been a seamless experience, as compared to calling URLs. Besides, the Documentation for the Python SDK is quite good, might be even better than the URL based API itself.</li>
        </ol>
      </Typography>,
      features : <ul>
      <li><span style={purpleStyle}>Holding Details:</span> Quantity of a Particular stock, it's current Price, Cost, P/L Percentage and Amount etc. </li>
      <br/>
      <li><span style={purpleStyle}>Portfolio details:</span> How much of my total Portfolio is covered by a particular stock by either Quantity or Amount. And Profit and Loss Comparison between shares, based on either Value or as a Percentage.  </li>
      <br/>
      <li><span style={purpleStyle}>Historical Data and Share Details:</span> Graphical Representation of Historical Data of a particular stock, as a candlestick chart.</li>
    </ul>,
      technology : <Typography variant='p'>
        <ul>
          <li><Purple>ReactJS</Purple> for the FrontEnd</li><br/>
          <li><Purple>Redux</Purple> for Application State Management</li><br/>
          <li><Purple>Bootstrap</Purple> for CSS and styling</li><br/>
          <li><Purple>React-vis, RechartJS and Apex Charts</Purple> for data visualization</li><br/>
          <li><Purple>Flask</Purple> for Backend</li><br/>
          <li><Purple>SQLite3</Purple> for temporary storage of Scrip Data</li>
        </ul>
      </Typography>,
      challenges: <>
        <br/>
        <Typography variant='h4' color='primary.light'>React-vis Labelling for Pie Charts</Typography><br/>
        <Typography variant='p'>Initially, I went into the Project thinking using <Purple>React-Vis</Purple> was enough for all the type ofVisualization I might need in the Project. But I faced two issues pretty early on with React-Vis. One of the issues was regarding <Purple>Pie Charts</Purple>.
        <br/><br/>(One thing to keep in mind is, Pie Charts in React-Vis are just <Purple>tweaked Radial Charts</Purple>.) 
        <br/><br/>The issue that I had faced was that, there was no proper functionality for <Purple>Labelling the pie chart</Purple>. Although, it could be done with a lot of workaround, it wasn't exactly seamless, and it would needlessly consume time for developing this, especially considering that RechartJS had the exact solution that I was looking for (withanimations!) <br/><br/>Hence, I just went with <Purple>RechartJS for the Pie Charts</Purple>. </Typography>
        <br/><br/><br/>
        <Typography variant='h4' color='primary.light'>CandleStick data</Typography><br/>
        <Typography variant='p'>As stated previously, I had intended to use just React-vis for all of my visualization needs in this Project. However, <Purple>React-vis</Purple> does not have a CandleStick type of chart, but as you might know, CandleSticks are very important in Share Price analysis (or even Crypto) for displaying <Purple>OHLC data</Purple> over a period of time. 
        <br/><br/>This is where <Purple>Apex Charts</Purple> came in, because they had the best implementation of CandleSticks for React I have seen, and also a pretty good documentation. However, since by nature CandleSticks are more complicated than a regular type of chart, there were issues that I had faced within Apex Charts, nothing a bit of tweaking around won't fix though. 
        <br/><br/>If you look at the <Purple>5Paisa</Purple> documentation for <Purple>Historical Data</Purple>, you can see that they don't send OHLC data via API for all time of day. <Purple>They specifically only send data for the time period the Stock Market is open</Purple>, which also eliminates Weekends, and other holidays. Hence that portion of the CandleStick was just sitting blank. So I had to tweak around a bit to display the CandleStick over a <Purple>discrete amount of time, instead of continuous</Purple>, and the issue was fixed. 
        <br/><br/>Not to take anything away from React-vis though, it is still one of the best visualization tools I have seen for React, once I finished the Project. </Typography>
        </>
    }
  },
  {
    id:3,
    title : <Typography variant='h3' color='secondary.light'>
      Investment Portfolio
    </Typography>,
    image : require('./ProjectsImages/investments.jpg'),
    content : <Typography variant='p' sx={{textAlign:'left', fontSize:16}}>
    Self-Project for viewing and analyzing Investments made in Stock Market, including various types of visual representation of data. Application built in React, with Back-End using Flask. <br/>
    There are API Calls to 5Paisa API in back-end. And used a localized SQLite DB for Temporary Storage. The Visual graphs were made using React-vis, RechartJS and Apex Charts.
    </Typography>,
    redirectUrl : '3',
    skills : ['ReactJS', 'Flask', 'Python', 'Bootstrap', 'Git', 'React-Vis', 'RechartJS', 'Apex Charts'],
    fullContent : {
      title : <Typography variant = 'h2' color='secondary-light'>Investment Portfolio</Typography>,
      description : <Typography variant='p'>
        This was a Self Project that I came up with. This Web App is a visual representation of current and past <span style={purpleStyle}>Indian Stock Market Data</span>, along with Visual Representation of the Holdings that are currently owned by me. 
        <br/><br/>
        This Project was mainly required to perform Portfolio Analysis for myself based on Stock Market Data (NSE). Since I use <span style={purpleStyle}>5Paisa</span> as a Broker, I have used their <span style={purpleStyle}>Python SDK</span> in backend for acquiring the data. They also have APIs accessed via URLs and Node SDK as well, however I have used the Python SDK for two reasons : <br/> 
        <ol>
          <li>The SDK for NodeJS is not as good, with extremely limited functionality, and subpar documentation.</li><br/>
          <li>My Choice for backend before going into the depths of the Project was <span style={purpleStyle}>Flask</span>. So an SDK for Python would have been a seamless experience, as compared to calling URLs. Besides, the Documentation for the Python SDK is quite good, might be even better than the URL based API itself.</li>
        </ol>
      </Typography>,
      features : <ul>
      <li><span style={purpleStyle}>Holding Details:</span> Quantity of a Particular stock, it's current Price, Cost, P/L Percentage and Amount etc. </li>
      <br/>
      <li><span style={purpleStyle}>Portfolio details:</span> How much of my total Portfolio is covered by a particular stock by either Quantity or Amount. And Profit and Loss Comparison between shares, based on either Value or as a Percentage.  </li>
      <br/>
      <li><span style={purpleStyle}>Historical Data and Share Details:</span> Graphical Representation of Historical Data of a particular stock, as a candlestick chart.</li>
    </ul>,
      technology : <Typography variant='p'>
        <ul>
          <li><Purple>ReactJS</Purple> for the FrontEnd</li><br/>
          <li><Purple>Redux</Purple> for Application State Management</li><br/>
          <li><Purple>Bootstrap</Purple> for CSS and styling</li><br/>
          <li><Purple>React-vis, RechartJS and Apex Charts</Purple> for data visualization</li><br/>
          <li><Purple>Flask</Purple> for Backend</li><br/>
          <li><Purple>SQLite3</Purple> for temporary storage of Scrip Data</li>
        </ul>
      </Typography>,
      challenges: <>
        <br/>
        <Typography variant='h4' color='primary.light'>React-vis Labelling for Pie Charts</Typography><br/>
        <Typography variant='p'>Initially, I went into the Project thinking using <Purple>React-Vis</Purple> was enough for all the type ofVisualization I might need in the Project. But I faced two issues pretty early on with React-Vis. One of the issues was regarding <Purple>Pie Charts</Purple>.
        <br/><br/>(One thing to keep in mind is, Pie Charts in React-Vis are just <Purple>tweaked Radial Charts</Purple>.) 
        <br/><br/>The issue that I had faced was that, there was no proper functionality for <Purple>Labelling the pie chart</Purple>. Although, it could be done with a lot of workaround, it wasn't exactly seamless, and it would needlessly consume time for developing this, especially considering that RechartJS had the exact solution that I was looking for (withanimations!) <br/><br/>Hence, I just went with <Purple>RechartJS for the Pie Charts</Purple>. </Typography>
        <br/><br/><br/>
        <Typography variant='h4' color='primary.light'>CandleStick data</Typography><br/>
        <Typography variant='p'>As stated previously, I had intended to use just React-vis for all of my visualization needs in this Project. However, <Purple>React-vis</Purple> does not have a CandleStick type of chart, but as you might know, CandleSticks are very important in Share Price analysis (or even Crypto) for displaying <Purple>OHLC data</Purple> over a period of time. 
        <br/><br/>This is where <Purple>Apex Charts</Purple> came in, because they had the best implementation of CandleSticks for React I have seen, and also a pretty good documentation. However, since by nature CandleSticks are more complicated than a regular type of chart, there were issues that I had faced within Apex Charts, nothing a bit of tweaking around won't fix though. 
        <br/><br/>If you look at the <Purple>5Paisa</Purple> documentation for <Purple>Historical Data</Purple>, you can see that they don't send OHLC data via API for all time of day. <Purple>They specifically only send data for the time period the Stock Market is open</Purple>, which also eliminates Weekends, and other holidays. Hence that portion of the CandleStick was just sitting blank. So I had to tweak around a bit to display the CandleStick over a <Purple>discrete amount of time, instead of continuous</Purple>, and the issue was fixed. 
        <br/><br/>Not to take anything away from React-vis though, it is still one of the best visualization tools I have seen for React, once I finished the Project. </Typography>
        </>
    }
  }
]

export default ProjectInformation