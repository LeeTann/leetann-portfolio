import React from 'react'
import './projects.css'

export default function Projects() {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='cards-container'>
        <div className='card'>
          <a
            href='https://beautiful-jewels.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='images/beautifulj.png'
              alt='card img'
              className='card-img'
            />
          </a>
          <h1>Beautiful Jewels</h1>
          <div className='card-content'>
            <p className='card-details'>
              Beautiful Jewels is a fully functional e-commerce site that sells
              jewelry. Features include: shopping cart with payment system,
              product reviews/ratings and a restricted admin screen to manage
              products.
            </p>
            <div className='card-info'>
              <p>
                <span className='bold'>Developed:</span> Solo Project
              </p>
            </div>
            <div className='card-info'>
              <p>
                <span className='bold'>Tech:</span>React, Redux, Node.js,
                Express.js, MongoDB, Paypal API.
              </p>
            </div>
          </div>

          <div className='btn-container'>
            <a
              href='https://github.com/LeeTann/Beautiful-Jewels'
              rel='noopener noreferrer'
            >
              <button className='btn'>Github</button>
            </a>
            <a
              href='https://beautiful-jewels.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>View Live</button>
            </a>
          </div>
        </div>

        <div className='card'>
          <a
            href='https://master.d7kgw2wgzojnc.amplifyapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='images/pencil1.png' alt='card img' className='card-img' />
          </a>
          <h1>Pencil</h1>
          <div className='card-content'>
            <p className='card-details'>
              Pencil is a full-stack serverless note taking app utilizing Amazon
              Web Services. The application was built as a way to take notes
              while studying for the AWS Solutions Architect Exam.
            </p>
            <div className='card-info'>
              <p>
                <span className='bold'>Developed:</span> Solo Project
              </p>
            </div>
            <div className='card-info'>
              <p>
                <span className='bold'>Tech:</span>AWS Amplify, S3, DynamoDB,
                Lambda, API Gateway, Cognito, CloudFormation, Serverless
                Framework, React, Node
              </p>
            </div>
          </div>

          <div className='btn-container'>
            <a
              href='https://github.com/LeeTann/Pencil'
              rel='noopener noreferrer'
            >
              <button className='btn'>Github</button>
            </a>
            <a
              href='https://master.d7kgw2wgzojnc.amplifyapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>View Live</button>
            </a>
          </div>
        </div>

        <div className='card'>
          <a
            href='https://affectionate-almeida-c22cb1.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='images/inquiry.png' alt='card img' className='card-img' />
          </a>
          <h1>Inquiry</h1>
          <div className='card-content'>
            <p className='card-details'>
              Inquiry is an app that aims at easing the stress of finding and
              booking an independent contractor by providing a simplified
              schedule for booking and maintaining appointments.
            </p>
            <div className='card-info'>
              <p>
                <span className='bold'>Developed:</span> Team capstone project
              </p>
            </div>
            <div>
              <p className='card-info'>
                <span className='bold'>Tech:</span> React, Redux, Custom CSS,
                Node, Express, Postgres, HTML5, Heroku, Netlify
              </p>
            </div>
          </div>
          <div className='btn-container'>
            <a
              href='https://github.com/pt3-labs-contractor'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>Github</button>
            </a>
            <a
              href='https://affectionate-almeida-c22cb1.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>View Live</button>
            </a>
          </div>
        </div>

        <div className='card'>
          <a
            href='https://covid19-tracker-leetann.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='images/covid19.png' alt='card img' className='card-img' />
          </a>
          <h1>Covid-19 Tracker</h1>
          <div className='card-content'>
            <p className='card-details'>
              An application that tracks real time data of Covid-19 around the
              world utilizing a third party api.
            </p>
            <div className='card-info'>
              <p>
                <span className='bold'>Developed:</span> Solo Project
              </p>
            </div>
            <div className='card-info'>
              <p>
                <span className='bold'>Tech:</span> React, Hooks, Chartjs,
                MaterialUI, HTML5, CSS, Netlify
              </p>
            </div>
          </div>
          <div className='btn-container'>
            <a
              href='https://github.com/LeeTann/Covid-19'
              rel='noopener noreferrer'
            >
              <button className='btn'>Github</button>
            </a>
            <a
              href='https://covid19-tracker-leetann.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>View Live</button>
            </a>
          </div>
        </div>

        <div className='card'>
          <a
            href='https://expensetracker-mern.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='images/expense-tracker.png'
              alt='card img'
              className='card-img'
            />
          </a>
          <h1>Expense Tracker</h1>
          <div className='card-content'>
            <p className='card-details'>
              A full-stack application that utilizes the MERN stack to keep
              track of expenses.
            </p>
            <div className='card-info'>
              <p>
                <span className='bold'>Developed:</span> Solo Project
              </p>
            </div>
            <div className='card-info'>
              <p>
                <span className='bold'>Tech:</span> React, Hooks, ContextAPI,
                Node, Express, MongoDB, HTML5, CSS, Heroku
              </p>
            </div>
          </div>
          <div className='btn-container'>
            <a
              href='https://github.com/LeeTann/Expense-Tracker-React-Node'
              rel='noopener noreferrer'
            >
              <button className='btn'>Github</button>
            </a>
            <a
              href='https://expensetracker-mern.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>View Live</button>
            </a>
          </div>
        </div>

        <div className='card'>
          <a
            href='https://gameoflife-react-hooks.netlify.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='images/gameoflife1.png'
              alt='card img'
              className='card-img'
            />
          </a>
          <h1>Game of Life</h1>
          <div className='card-content'>
            <p className='card-details'>
              Game of Life is a cellular automaton developed by John Horton
              Conway. The game is a zero-player game meaning that it's evolution
              is determined by it's initial state requiring no furture input.
            </p>
            <div className='card-info'>
              <p>
                <span className='bold'>Developed:</span> Solo Project
              </p>
            </div>
            <div className='card-info'>
              <p>
                <span className='bold'>Tech:</span> React, Hooks, CSS
              </p>
            </div>
          </div>
          <div className='btn-container gameoflife-btn'>
            <a
              href='https://github.com/LeeTann/Game0fLife'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>Github</button>
            </a>
            <a
              href='https://gameoflife-react-hooks.netlify.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn'>View Live</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
