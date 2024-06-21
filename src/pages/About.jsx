import { Box, Link, Typography } from "@mui/material";

export default function About() {
    return (
        <Box>
            <Typography variant="h5" py={1}>Version: 1.0.0</Typography>
            <Typography variant="subtitle1" sx={{lineHeight: 1.5}}>Securely and confidentially track your time. Enter the start and end time of your task, saving your private data to your browser on your device, without sharing it with the rest of the world.</Typography>

            {/* <hr /> */}

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 12, borderTop: '1px solid #aaa', py: 3}} color="gray">
                <Typography variant="subtitle1">©2024 TrackDay - <Link href="https://github.com/md-kibria" >@md-kibria</Link></Typography>
                <Box sx={{display: 'flex', gap: 1}}>
                    <Typography variant="subtitle1" color="gray"><Link href="https://www.facebook.com/profile.php?id=100068931456915" >
                    <svg fill="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: 20}} viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </Link></Typography>
                    <Typography variant="subtitle1" ><Link href="https://www.linkedin.com/in/md-kibria-a1170b2b4" >
                        <svg fill="#555" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" style={{width: 20}} viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </Link></Typography>
                    <Typography variant="subtitle1" ><Link href="https://github.com/md-kibria" >
                    
                    <svg height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg" fill="#555"><path d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>

                    </Link></Typography>
                </Box>
            </Box> 
        </Box>
    )
}