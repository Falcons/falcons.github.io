/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html',
    './pages/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d1d45",
        secondary: "#00c6c2",
        gold: "#ffd700",
        silver: "#c0c0c0"
      },
      backgroundImage: {
        index: "linear-gradient(to top, rgba(60, 60, 60, 1), rgba(243, 244, 246, 0.5)), url(/assets/images/robot_close.png)",
        robot_bg: "linear-gradient(to top, rgba(60, 60, 60, 1), rgba(243, 244, 246, 0.5)), url(/assets/images/team/team-candid.jpg)",
        team_bg: "linear-gradient(to top, rgba(60, 60, 60, 1), rgba(243, 244, 246, 0.5)), url(/assets/images/team/team-with-doug.jpg)",
        frc_bg: "linear-gradient(to top, rgba(60, 60, 60, 1), rgba(243, 244, 246, 0.5)), url(/assets/images/frc/event.png)",
        translucent: "linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5))"
      }
    },
  },
  plugins: [],
}

