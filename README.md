<div align="center">
 <img  src="https://github.com/Qutred/wild-fork/assets/13004973/ffdb4d89-b322-4ccd-8b1b-5eaec781c054"/>
 </div>

 <div align="center">
  <img src="https://img.shields.io/npm/v/npm.svg?logo=npm"/>
  <img src="https://img.shields.io/badge/react-v18.2.0-blue?logo=react"/>
  <img src="https://img.shields.io/badge/reactrouterdom-v6.22.1-red?logo=reactrouter"/>
  <img src="https://img.shields.io/badge/styledcomponents-v6.1.8-pink?logo=styledcomponents"/>
  <img src="https://img.shields.io/badge/reactquery-v4.36.1-red?logo=reactquery"/>
  <img src="https://img.shields.io/badge/reacthookform-v7.50.1-red?logo=reacthookform"/>
  <img src="https://img.shields.io/badge/supabase-v2.39.7-green?logo=supabase"/>
</div>

<p align="center">The Wild Fork app allows you to easily manage bookings, sales, check-ins, and occupancy rates..</p>

<div align="center">
<a href="#technologies-used">Technologies Used</a> • <a href="#quick-start">Quick Start</a> • <a href="#how-it-works">How It Works</a> • 
  <a href="https://wild-fork.vercel.app/login" align="Center">Live Server</a>
</div>

## Technologies Used

  - [React](https://react.dev/)
  - [React Router Dom](https://reactrouter.com/en/main)
  - [Styled componenets](https://styled-components.com/)
  - [React Query](https://tanstack.com/query/v3/)
  - [React Hook Form](https://www.react-hook-form.com/)
  - [Supabase](https://supabase.com/)

## Quick Start

To clone and run this application, you'll need [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```
# Clone this repository 
$ git clone https://github.com/Qutred/wild-fork

# Go into the repository
$ cd the-wild-oasis

# Install dependencies
$ npm install

# Run the app
$ npm run start
```


> [!NOTE]  
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## How It Works

### Dashboard page

- The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
- A list of guests checking in and out on the current day. Users should be able to perform these tasks from here
- Statistics on recent bookings, sales, check ins, and occupancy rate
- A chart showing all daily hotel sales, showing both “total” sales and “extras” sales (only breakfast at the moment)
- A chart showing statistics on stay durations, as this is an important metric for the hotel

![Screenshot1](https://github.com/Qutred/wild-fork/assets/13004973/2b7e91c4-46e1-4e2b-a121-e5858e3d4675)

### Bookings

- App needs a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data
- The booking status can be “unconfirmed” (booked but not yet checked in), “checked in”, or “checked out”. The table should be filterable 
by this important status
- Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price

![Screenshot2](https://github.com/Qutred/wild-fork/assets/13004973/f7545df9-6486-4fd9-bc02-580c6f7c73c2)

### Cabins
- App needs a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount
- Users should be able to update or delete a cabin, and to create new cabins (including uploading a photo)

![Screenshot3](https://github.com/Qutred/wild-fork/assets/13004973/306ffbc0-60ee-4dc7-86d3-7e7e37fab553)

### Users

- Users who have registered on the system are allowed to create new user accounts

![Screenshot4](https://github.com/Qutred/wild-fork/assets/13004973/640fa9ac-daa6-4d9e-b901-fbd94f85dd03)

### Settings

- Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking

![Screenshot5](https://github.com/Qutred/wild-fork/assets/13004973/1d945d36-9ef0-4375-aa2b-33c40a62d730)

### Theming
- The app should include the option to switch between dark and light mode
  
![Screenshot6](https://github.com/Qutred/wild-fork/assets/13004973/707d603e-ee8b-44a6-838c-846dcb562f26)

