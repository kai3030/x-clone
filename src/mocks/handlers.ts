import { http, HttpResponse } from 'msw'
 
export const handlers = [
    http.post('/api/users', async () => {
        console.log('sign up');

        return HttpResponse.text(JSON.stringify('ok'), {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
            }
        })

        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //     status: 403
        // });
    }),
    http.post('/api/login', () => {
        return HttpResponse.json({
            userId: 1,
            nickname: 'kai',
            id: 'kai3030',
            image: '/kai_profile.jpg',
        }, {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/logout', () => {
        return new HttpResponse(null, {
            headers: {
                 'Set-Cookie': 'connect.sid=;HttpOnly;Path=/Max-Age=0'
            }
        })
        
    }
    ),
//   // Intercept "GET https://example.com/user" requests...
//   http.get('https://example.com/user', () => {
//     // ...and respond to them using this JSON response.
//     return HttpResponse.json({
//       id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
//       firstName: 'John',
//       lastName: 'Maverick',
//     })
//   }),
]