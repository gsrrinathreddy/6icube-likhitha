import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordionee() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{  flexShrink: 0 }} marginLeft="20px">
          WHAT IS EVENTS2GO?
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd,
           who envisaged that this is the age of technology and we need a new way of working 
           that creates a culture that encourages collaboration and cooperation of units or 
           organisations and maximise the use of technology for achieving greater productivity 
           in the fast paced society, with COVID-19 like lockdown situations where
            virtual door-knocking has become compulsive and to determine the well-being
             of remotely working employees that has become essential in performance management
              and productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{  flexShrink: 0 }} marginLeft="20px">HOW DO I SELL TICKETS?</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Login or signup to your free Events2go account, then click Create Event.
           You can sell tickets for your free and paid events. Attendees can pay through PayPal to buy tickets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ flexShrink: 0 }} marginLeft="20px">
          COST OR PRICING?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Events2go App is free to use for individuals/attendees/participants to various events.
           Government Corporate and Charity organisations who are Event organisers pay a standard fee
         $150+Gst for free ticketed events, Government and Corporate organisations  will pay 5% of + $1.00
             per paid ticket and Charities will pay discounted rate of 2.5% + $0.50 per paid ticket.
           If you are thinking big and ongoing events let’s talk for customised pricing to suit you budget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}marginLeft="20px">CAN I SCAN TICKETS USING THE EVENTS2GO APP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, using the app on your smart device you can check-in and/or scan the QR Code issued on tickets.
           This means a lesser que times and happy attendees/participants.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{  flexShrink: 0 }} marginLeft="20px">
            WHAT KIND OF EVENTS CAN BE ACCESSED THROUGH EVENTS2GO APP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All kinds of Events, and are NOT excluded to Events,
           Music festivals, Workshops, Webinars, Conferences, Community Events, Forums and Trainings.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}