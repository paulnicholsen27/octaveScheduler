

function getAvailableTimes(data) {
    let calendar = makeBusyCalendar(data["events"])
    let available_meeting_times = []
    console.log(getDateArray())
    for (const day of getDateArray()) {
        console.log(day)
        if (calendar.hasOwnProperty(day)) {
            available_meeting_times.push({day: day, times: findOpenSlots(calendar[day])})
        } else {
            available_meeting_times.push({ day: day, times: [{ start: '09:00:00', end: '17:00:00' }] })
        }
    }
    console.log(available_meeting_times)
}

var getDateArray = function () {

    let dates = new Array()
    let dt = new Date("2022-01-01");
    let end = new Date("2022-12-31")
    while (dt <= end) {
        let date_string = dt.toISOString().slice(0, 10)
        dates.push(date_string)
        dt.setDate(dt.getDate() + 1);
    }
    return dates;
}

function findOpenSlots(day, length=30) {

    let open_spots = []
    let meeting_duration = length * 60 * 1000 //convert minutes to milliseconds
    let start_time = "09:00:00"
    let end_of_day = "17:00:00"
    for (busy_block of day) {
        if (getTimeFromHours(start_time) < getTimeFromHours(end_of_day)) {
            if (getTimeFromHours(busy_block.start) - getTimeFromHours(start_time) >= meeting_duration) {
                let open_time_ending = getTimeFromHours(busy_block.start) < getTimeFromHours(end_of_day) ? busy_block.start : end_of_day
                open_spots.push({start: start_time, end: open_time_ending})
            start_time = busy_block.end
            }
        }
    }
    //remainder of day
    if (getTimeFromHours(end_of_day) - getTimeFromHours(day[day.length - 1].end) >= 30) {
        open_spots.push({ 
            start: day[day.length - 1].end, 
            end: end_of_day
        })
    }
    return open_spots
}

function getTimeFromHours(time_string) {
    time = time_string.split(':');
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
}

function makeBusyCalendar(events) {
    let calendar = {}

    events.forEach(function(event) {
        if (event.busy) {
            let [start_date, start_time] = event.starts_at.split(" ")
            let [end_date, end_time] = event.ends_at.split(" ")
            let time_block = { start: start_time, end: end_time }
             // multi-day events
            if (start_date != end_date) {
                time_block = {start: start_time, end: "23:59:59"}
                let tomorrow = {start: "00:00:00", end: end_time}
                if (calendar[end_date]) {
                    calendar[end_date].push(tomorrow)
                } else {
                    calendar[end_date] = [tomorrow]
                }
            }             
            if (calendar[start_date]) {  
                calendar[start_date].push(time_block)
            } else {
                calendar[start_date] = [time_block]
            }
        }
        
    })
    
    // sort events on a day based on start time from earliest to latest
    for (const day in calendar) {
        calendar[day].sort( (a, b) => getTimeFromHours(a.start) - getTimeFromHours(b.start))
    }
    // console.log(calendar)
    return calendar
}

getAvailableTimes({
    events: [
        {
            attendees: 2,
            busy: true,
            description: 'venenatis vel, faucibus id, libero. Donec consectetuer mauris',
            starts_at: '2022-01-02 18:02:47',
            ends_at: '2022-01-02 20:02:47',
            id: '6859A629-E532-67DD-97E7-DADCF4A758D6',
            address: '2666 Ut St.',
            title: 'sollicitudin a, malesuada'
        },
        {
            attendees: 1,
            busy: true,
            description: 'vel arcu. Curabitur ut odio vel',
            starts_at: '2022-01-03 23:47:53',
            ends_at: '2022-01-04 00:17:53',
            id: 'B67D2FCF-C479-1B7D-1CE2-831A162C3984',
            address: '478-2683 Est Av.',
            title: 'sapien.'
        },
        {
            attendees: 1,
            busy: true,
            description: 'orci, in consequat enim diam vel arcu. Curabitur',
            starts_at: '2022-01-04 07:14:47',
            ends_at: '2022-01-04 11:14:47',
            id: '5115B4E8-20B2-B96D-B301-A926C40B543C',
            address: '1371 Dui. Rd.',
            title: 'lorem vitae'
        },
        {
            attendees: 1,
            busy: true,
            description: 'Nam nulla magna, malesuada vel,',
            starts_at: '2022-01-05 11:08:16',
            ends_at: '2022-01-05 12:08:16',
            id: '35BF8CA9-D48F-8935-66A3-DA8BF16A18BD',
            address: 'Ap #547-3367 Dolor Rd.',
            title: 'eleifend, nunc'
        },
        {
            attendees: 2,
            busy: false,
            description: 'ipsum. Phasellus vitae mauris sit amet lorem',
            starts_at: '2022-01-07 02:53:49',
            ends_at: '2022-01-07 06:53:49',
            id: '804AB787-CE21-9CB3-185C-7C1B7C7A8912',
            address: 'Ap #127-2682 Non St.',
            title: 'neque et nunc.'
        },
        {
            attendees: 1,
            busy: false,
            description: 'erat, in consectetuer ipsum nunc id enim.',
            starts_at: '2022-01-08 07:00:11',
            ends_at: '2022-01-08 11:00:11',
            id: 'BE30F6D1-77EA-E15D-E4F3-25917FDE7617',
            address: 'P.O. Box 950, 2952 Vehicula Avenue',
            title: 'convallis'
        },
        {
            attendees: 1,
            busy: true,
            description: 'Nulla tincidunt, neque vitae semper egestas,',
            starts_at: '2022-01-09 13:17:49',
            ends_at: '2022-01-09 13:47:49',
            id: 'FD06A114-D649-1290-A2E9-EE2BE87A46DC',
            address: '996-6194 Ipsum Rd.',
            title: 'a, magna.'
        },
        {
            attendees: 2,
            busy: false,
            description: 'mauris id sapien. Cras dolor dolor, tempus non, lacinia',
            starts_at: '2022-01-09 18:50:27',
            ends_at: '2022-01-09 20:50:27',
            id: 'D455C979-97E2-2E1C-E4D4-975D8711AC13',
            address: '531-1944 Molestie Rd.',
            title: 'massa rutrum'
        },
        {
            attendees: 1,
            busy: true,
            description: 'dapibus rutrum, justo. Praesent luctus. Curabitur',
            starts_at: '2022-01-10 01:02:17',
            ends_at: '2022-01-10 01:32:17',
            id: '711AC1E8-E573-C1FB-9D90-E67C8446CEAB',
            address: 'Ap #610-1007 Mollis. St.',
            title: 'augue'
        },
        {
            attendees: 1,
            busy: true,
            description: 'sit amet orci. Ut sagittis lobortis mauris. Suspendisse',
            starts_at: '2022-01-10 06:41:00',
            ends_at: '2022-01-10 08:41:00',
            id: '55D261E9-780F-119E-3ABA-B7B17D2D867E',
            address: '241-1834 Velit. Rd.',
            title: 'Cras dictum'
        },
        {
            attendees: 2,
            busy: true,
            description: 'lacinia. Sed congue, elit sed consequat',
            starts_at: '2022-01-10 15:07:29',
            ends_at: '2022-01-10 17:07:29',
            id: '09EDB013-4817-9F52-F3A4-396DE941BA39',
            address: '756-8012 Odio Avenue',
            title: 'pede,'
        },
        {
            attendees: 2,
            busy: false,
            description: 'arcu vel quam dignissim pharetra. Nam ac nulla.',
            starts_at: '2022-01-11 22:26:42',
            ends_at: '2022-01-11 22:56:42',
            id: '84B8938D-C432-5C5C-E09A-532B388ABEE9',
            address: 'Ap #165-9717 Donec Av.',
            title: 'ipsum. Suspendisse'
        },
        {
            attendees: 2,
            busy: false,
            description: 'Vivamus non lorem vitae odio sagittis semper. Nam tempor diam',
            starts_at: '2022-01-12 00:27:41',
            ends_at: '2022-01-12 00:57:41',
            id: 'CB041555-E984-95C5-6DBE-8C1AA23E1148',
            address: 'P.O. Box 450, 5887 Semper Road',
            title: 'pede, malesuada'
        },
        {
            attendees: 1,
            busy: false,
            description: 'placerat, orci lacus vestibulum lorem, sit amet',
            starts_at: '2022-01-13 15:01:20',
            ends_at: '2022-01-13 16:01:20',
            id: '9209A5B4-0A6B-8AE4-0C66-20EDFB44354C',
            address: 'P.O. Box 341, 4555 Donec Rd.',
            title: 'primis in faucibus'
        },
        {
            attendees: 1,
            busy: true,
            description: 'semper. Nam tempor diam dictum',
            starts_at: '2022-01-14 06:27:07',
            ends_at: '2022-01-14 06:57:07',
            id: '879A3CB9-655E-33DA-E212-19ADA2C061A0',
            address: 'Ap #955-5545 Diam Av.',
            title: 'sagittis'
        },
        {
            attendees: 2,
            busy: false,
            description: 'diam at pretium aliquet, metus urna convallis erat, eget',
            starts_at: '2022-01-14 09:07:34',
            ends_at: '2022-01-14 10:07:34',
            id: '3E111801-1AAE-6EBC-1B4C-06590C19DD99',
            address: '6365 Erat Ave',
            title: 'faucibus lectus,'
        },
        {
            attendees: 2,
            busy: false,
            description: 'at auctor ullamcorper, nisl arcu',
            starts_at: '2022-01-14 20:56:54',
            ends_at: '2022-01-14 21:56:54',
            id: '829D9ACA-5755-C7A1-5CE4-7F5A712CC86C',
            address: '667-4113 Neque. Av.',
            title: 'adipiscing lacus.'
        },
        {
            attendees: 1,
            busy: false,
            description: 'dis parturient montes, nascetur ridiculus mus. Aenean',
            starts_at: '2022-01-14 21:45:38',
            ends_at: '2022-01-14 22:45:38',
            id: '526C18CC-9A5C-987D-AB02-8DE14876E898',
            address: 'Ap #490-5333 Ultrices. St.',
            title: 'Cras pellentesque.'
        },
        {
            attendees: 2,
            busy: true,
            description: 'justo. Proin non massa non ante',
            starts_at: '2022-01-15 01:50:19',
            ends_at: '2022-01-15 02:50:19',
            id: '8DB7F3BE-13B1-A2D1-EE28-10A72BFA6544',
            address: '503-5589 Dapibus Street',
            title: 'sit amet, consectetuer'
        },
        {
            attendees: 1,
            busy: true,
            description: 'Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,',
            starts_at: '2022-01-15 06:51:24',
            ends_at: '2022-01-15 08:51:24',
            id: '7162F146-9316-840B-938E-0B35F79C7BC5',
            address: 'P.O. Box 225, 6530 Malesuada St.',
            title: 'dignissim tempor arcu.'
        },
        {
            attendees: 2,
            busy: false,
            description: 'varius et, euismod et, commodo at, libero. Morbi',
            starts_at: '2022-01-15 16:36:31',
            ends_at: '2022-01-15 17:36:31',
            id: 'F9D56485-EB1E-8668-9FBE-567AB72B693F',
            address: '860-9132 Lacinia Road',
            title: 'eros non'
        },
        {
            attendees: 1,
            busy: true,
            description: 'placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla',
            starts_at: '2022-01-15 20:54:17',
            ends_at: '2022-01-15 21:54:17',
            id: 'C5DB3EB9-79AE-1F5B-67A1-B00EB67D579D',
            address: 'Ap #460-7616 Accumsan St.',
            title: 'arcu et'
        },
        {
            attendees: 1,
            busy: true,
            description: 'pretium aliquet, metus urna convallis erat, eget',
            starts_at: '2022-01-15 23:18:17',
            ends_at: '2022-01-16 03:18:17',
            id: '84A237E2-B4A2-CA4D-8D9A-2D1F953AF6BF',
            address: 'Ap #782-4383 Aliquet St.',
            title: 'lorem, auctor'
        },
        {
            attendees: 1,
            busy: true,
            description: 'rutrum, justo. Praesent luctus. Curabitur egestas',
            starts_at: '2022-01-15 23:48:02',
            ends_at: '2022-01-16 00:18:02',
            id: 'AC3A42AC-A99E-CEA4-1EDD-2E1B5B321275',
            address: 'Ap #506-9364 Rhoncus. Rd.',
            title: 'tempus risus. Donec'
        },
        {
            attendees: 1,
            busy: false,
            description: 'cubilia Curae Donec tincidunt. Donec vitae erat',
            starts_at: '2022-01-16 19:09:34',
            ends_at: '2022-01-16 23:09:34',
            id: '6CCACBF6-1A85-41C7-CF0E-5DEFF3577EB0',
            address: '990-3843 Justo. Av.',
            title: 'sed, hendrerit'
        },
        {
            attendees: 1,
            busy: false,
            description: 'dictum. Proin eget odio. Aliquam vulputate',
            starts_at: '2022-01-17 11:22:31',
            ends_at: '2022-01-17 13:22:31',
            id: '67B74769-032E-9C36-3946-45DEEEF212E8',
            address: '9930 Sodales. Rd.',
            title: 'natoque penatibus'
        },
        {
            attendees: 1,
            busy: true,
            description: 'eget, volutpat ornare, facilisis eget, ipsum. Donec',
            starts_at: '2022-01-17 12:17:16',
            ends_at: '2022-01-17 13:17:16',
            id: 'CD2332E1-2904-B467-1C7F-434B9A292381',
            address: '1250 Torquent Ave',
            title: 'iaculis'
        },
        {
            attendees: 1,
            busy: false,
            description: 'Curabitur ut odio vel est tempor bibendum. Donec felis',
            starts_at: '2022-01-18 03:33:48',
            ends_at: '2022-01-18 05:33:48',
            id: '4B52E127-3836-A029-D6CC-6E21267B5774',
            address: 'Ap #488-1533 Urna. Avenue',
            title: 'sed pede nec'
        },
        {
            attendees: 2,
            busy: false,
            description: 'euismod mauris eu elit. Nulla facilisi. Sed neque. Sed',
            starts_at: '2022-01-18 08:36:58',
            ends_at: '2022-01-18 12:36:58',
            id: '9D566AAA-695C-69F3-E684-1C9746C84729',
            address: 'Ap #768-8760 Convallis Avenue',
            title: 'in'
        },
        {
            attendees: 2,
            busy: true,
            description: 'non, bibendum sed, est. Nunc laoreet lectus quis',
            starts_at: '2022-01-19 01:45:35',
            ends_at: '2022-01-19 02:45:35',
            id: 'AE4C284B-C877-3D36-EDFF-74A93E3D8779',
            address: 'Ap #592-6945 Massa Avenue',
            title: 'mus. Aenean'
        },
        {
            attendees: 2,
            busy: false,
            description: 'Proin mi. Aliquam gravida mauris',
            starts_at: '2022-01-19 04:39:53',
            ends_at: '2022-01-19 05:09:53',
            id: '7BA85A2E-1D7B-E356-B838-12BA4A02BA17',
            address: 'Ap #161-5796 Cras Ave',
            title: 'arcu.'
        },
        {
            attendees: 1,
            busy: true,
            description: 'Vivamus nibh dolor, nonummy ac, feugiat non,',
            starts_at: '2022-01-19 20:48:54',
            ends_at: '2022-01-20 00:48:54',
            id: '62155964-F37E-2DC2-BE99-3EA2B64412D5',
            address: 'P.O. Box 891, 2567 Ac, Rd.',
            title: 'Fusce aliquam,'
        },
        {
            attendees: 1,
            busy: false,
            description: 'sed leo. Cras vehicula aliquet libero.',
            starts_at: '2022-01-20 01:40:38',
            ends_at: '2022-01-20 02:40:38',
            id: '9EB1633C-C891-322B-AD3C-24C6602FB55A',
            address: '5209 Id, Rd.',
            title: 'lacus. Etiam bibendum'
        },
        {
            attendees: 1,
            busy: false,
            description: 'leo. Vivamus nibh dolor, nonummy',
            starts_at: '2022-01-22 04:33:53',
            ends_at: '2022-01-22 08:33:53',
            id: 'C633E87D-FC9B-364E-A1D7-0A6EC5528125',
            address: 'P.O. Box 826, 6898 Praesent Avenue',
            title: 'erat. Etiam'
        },
        {
            attendees: 1,
            busy: false,
            description: 'pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam',
            starts_at: '2022-01-22 18:48:09',
            ends_at: '2022-01-22 22:48:09',
            id: 'E5406CA0-553B-5D46-2F53-B94CE2618FDD',
            address: 'P.O. Box 131, 2372 Orci Rd.',
            title: 'nibh'
        },
        {
            attendees: 2,
            busy: true,
            description: 'mattis. Cras eget nisi dictum',
            starts_at: '2022-01-22 18:52:15',
            ends_at: '2022-01-22 19:52:15',
            id: '323B4538-DBDC-C24D-4747-3A2AB5ECE5BB',
            address: '8193 Dis Rd.',
            title: 'ipsum primis in'
        },
        {
            attendees: 1,
            busy: true,
            description: 'egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum',
            starts_at: '2022-01-23 04:50:25',
            ends_at: '2022-01-23 05:20:25',
            id: '3B6336A2-F103-EC22-B27C-9C2782B9C19A',
            address: '558-7018 Pede, Rd.',
            title: 'faucibus orci'
        },
        {
            attendees: 1,
            busy: false,
            description: 'amet massa. Quisque porttitor eros nec tellus. Nunc lectus',
            starts_at: '2022-01-24 08:41:37',
            ends_at: '2022-01-24 12:41:37',
            id: '10D215BA-2CA8-9421-4AB3-7BB2155B988E',
            address: 'Ap #513-512 Fermentum Rd.',
            title: 'metus. In nec'
        },
        {
            attendees: 2,
            busy: true,
            description: 'nibh. Phasellus nulla. Integer vulputate, risus a',
            starts_at: '2022-01-24 10:53:19',
            ends_at: '2022-01-24 11:23:19',
            id: 'B34B1427-042D-16FB-ADB1-795BA21AF121',
            address: 'Ap #810-5257 Elit. Rd.',
            title: 'hendrerit id,'
        },
        {
            attendees: 1,
            busy: true,
            description: 'luctus sit amet, faucibus ut, nulla. Cras eu',
            starts_at: '2022-01-24 21:19:18',
            ends_at: '2022-01-24 22:19:18',
            id: 'BAADBD18-93BB-E95E-A1EA-7131FC43B967',
            address: '3054 Gravida. Street',
            title: 'hendrerit a, arcu.'
        },
        {
            attendees: 1,
            busy: false,
            description: 'enim consequat purus. Maecenas libero est, congue a,',
            starts_at: '2022-01-25 14:45:23',
            ends_at: '2022-01-25 18:45:23',
            id: 'BE2944BA-4113-14C0-4A6E-D747BC972A2B',
            address: 'Ap #322-4568 Praesent Street',
            title: 'in faucibus orci'
        },
        {
            attendees: 1,
            busy: false,
            description: 'mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed',
            starts_at: '2022-01-27 05:08:33',
            ends_at: '2022-01-27 09:08:33',
            id: 'C4B91C88-B079-43D7-43C5-C2F00C8BB061',
            address: '2594 Netus Avenue',
            title: 'amet, faucibus'
        },
        {
            attendees: 1,
            busy: true,
            description: 'neque non quam. Pellentesque habitant morbi',
            starts_at: '2022-01-27 22:58:52',
            ends_at: '2022-01-28 00:58:52',
            id: 'A6CC9CD9-CC7C-14DA-23CE-9F29AC656B42',
            address: '4166 Aliquet. Rd.',
            title: 'posuere at,'
        },
        {
            attendees: 1,
            busy: true,
            description: 'Mauris blandit enim consequat purus. Maecenas libero',
            starts_at: '2022-01-28 03:23:38',
            ends_at: '2022-01-28 05:23:38',
            id: '84E466EC-0EDA-1B69-1AEA-B042B979711C',
            address: 'Ap #989-4481 Sed Rd.',
            title: 'diam vel arcu.'
        },
        {
            attendees: 1,
            busy: true,
            description: 'tellus id nunc interdum feugiat. Sed nec',
            starts_at: '2022-01-28 08:11:20',
            ends_at: '2022-01-28 10:11:20',
            id: 'A5C9EBBA-1D66-7272-2142-11E8893B1416',
            address: 'P.O. Box 188, 3825 Magna, Road',
            title: 'risus. Donec egestas.'
        },
        {
            attendees: 2,
            busy: false,
            description: 'sed tortor. Integer aliquam adipiscing lacus. Ut nec',
            starts_at: '2022-01-28 14:16:22',
            ends_at: '2022-01-28 15:16:22',
            id: 'A303198B-E0A3-5A3E-4222-6FA7E46D67CE',
            address: '693-7194 Odio Road',
            title: 'in,'
        },
        {
            attendees: 1,
            busy: false,
            description: 'pede blandit congue. In scelerisque scelerisque dui. Suspendisse',
            starts_at: '2022-01-29 03:02:10',
            ends_at: '2022-01-29 03:32:10',
            id: 'C84E914E-3A21-64F4-39A2-144C99B34B9A',
            address: '1517 Dui. Rd.',
            title: 'Vivamus rhoncus.'
        },
        {
            attendees: 1,
            busy: false,
            description: 'interdum. Curabitur dictum. Phasellus in felis. Nulla',
            starts_at: '2022-01-30 08:29:05',
            ends_at: '2022-01-30 08:59:05',
            id: '46C85EF4-29D3-B5B4-76C7-701576668116',
            address: '903-2143 A Av.',
            title: 'sit amet, consectetuer'
        },
        {
            attendees: 2,
            busy: true,
            description: 'lobortis augue scelerisque mollis. Phasellus libero',
            starts_at: '2022-02-01 11:28:45',
            ends_at: '2022-02-01 15:28:45',
            id: 'E7D5B038-C960-B8A8-F0A6-C79CE462CA81',
            address: '223-183 Laoreet Rd.',
            title: 'placerat, augue.'
        },
        {
            attendees: 1,
            busy: false,
            description: 'vitae, orci. Phasellus dapibus quam quis diam.',
            starts_at: '2022-02-01 15:28:16',
            ends_at: '2022-02-01 17:28:16',
            id: '9118294A-2E22-F575-8387-845BCE7F11D1',
            address: '7064 Sodales St.',
            title: 'aliquam eros'
        },
        {
            attendees: 2,
            busy: false,
            description: 'Sed eget lacus. Mauris non dui nec urna suscipit nonummy.',
            starts_at: '2022-02-02 13:33:59',
            ends_at: '2022-02-02 15:33:59',
            id: 'A29D15D5-6F52-2408-3571-1988D16C48B5',
            address: 'Ap #125-561 Eget Rd.',
            title: 'turpis. Nulla'
        },
        {
            attendees: 1,
            busy: true,
            description: 'tincidunt aliquam arcu. Aliquam ultrices iaculis odio.',
            starts_at: '2022-02-02 20:03:12',
            ends_at: '2022-02-02 21:03:12',
            id: 'D7BC873F-D028-D1E9-7EF6-D6B06A59C861',
            address: '8229 Ipsum St.',
            title: 'ac ipsum. Phasellus'
        },
        {
            attendees: 2,
            busy: false,
            description: 'ut nisi a odio semper cursus. Integer mollis.',
            starts_at: '2022-02-03 20:26:25',
            ends_at: '2022-02-03 20:56:25',
            id: 'B9742A65-F431-BA98-1461-FBD21412743D',
            address: '649-2280 Adipiscing Street',
            title: 'sem ut dolor'
        },
        {
            attendees: 2,
            busy: false,
            description: 'ante blandit viverra. Donec tempus, lorem fringilla ornare',
            starts_at: '2022-02-03 23:24:33',
            ends_at: '2022-02-04 00:24:33',
            id: '54A4B517-F23B-611C-1D8F-A6C9686575F1',
            address: 'P.O. Box 824, 6181 Pellentesque Av.',
            title: 'leo.'
        },
        {
            attendees: 1,
            busy: true,
            description: 'sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed',
            starts_at: '2022-02-05 11:37:15',
            ends_at: '2022-02-05 15:37:15',
            id: 'C39DD97B-49A6-2477-D67B-8ADA66F6DAA8',
            address: '204-9095 Nulla Rd.',
            title: 'dapibus id,'
        },
        {
            attendees: 1,
            busy: false,
            description: 'bibendum fermentum metus. Aenean sed',
            starts_at: '2022-02-05 18:30:24',
            ends_at: '2022-02-05 22:30:24',
            id: '5AFF32D1-A3C6-65E8-4A3E-11E32B72DA43',
            address: 'Ap #330-5319 Metus. Ave',
            title: 'quis, pede.'
        },
        {
            attendees: 2,
            busy: false,
            description: 'gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum',
            starts_at: '2022-02-05 20:05:25',
            ends_at: '2022-02-05 20:35:25',
            id: 'B6BCE8E5-7BE2-CC1A-A996-DD944D161FEC',
            address: 'Ap #239-1483 Nibh. Av.',
            title: 'ridiculus mus.'
        },
        {
            attendees: 2,
            busy: true,
            description: 'venenatis lacus. Etiam bibendum fermentum metus. Aenean',
            starts_at: '2022-02-06 08:16:33',
            ends_at: '2022-02-06 08:46:33',
            id: '0DD3CA31-626A-7737-E96B-455E5A466F12',
            address: 'Ap #870-1296 A Street',
            title: 'felis.'
        },
        {
            attendees: 2,
            busy: true,
            description: 'rhoncus. Proin nisl sem, consequat nec, mollis vitae,',
            starts_at: '2022-02-06 11:30:15',
            ends_at: '2022-02-06 12:30:15',
            id: 'D4EE9956-030E-4A15-8728-76F846361E8A',
            address: '548-6131 Donec Ave',
            title: 'molestie dapibus ligula.'
        },
        {
            attendees: 1,
            busy: true,
            description: 'et magnis dis parturient montes, nascetur ridiculus',
            starts_at: '2022-02-07 03:31:25',
            ends_at: '2022-02-07 04:01:25',
            id: 'B61B8AEF-A143-4D3D-57E3-634FD4D256FE',
            address: 'P.O. Box 761, 7263 Aliquet St.',
            title: 'libero'
        },
        {
            attendees: 2,
            busy: true,
            description: 'nec luctus felis purus ac',
            starts_at: '2022-02-07 13:35:17',
            ends_at: '2022-02-07 17:35:17',
            id: 'A1A64E41-9433-49C9-323B-7436824EADA8',
            address: 'Ap #113-2878 Dignissim Rd.',
            title: 'aptent taciti'
        },
        {
            attendees: 1,
            busy: true,
            description: 'ut lacus. Nulla tincidunt, neque vitae semper',
            starts_at: '2022-02-07 16:20:54',
            ends_at: '2022-02-07 20:20:54',
            id: '77C65582-87B4-BB9B-EB2C-9B7E7863290A',
            address: 'Ap #686-5825 Nec Avenue',
            title: 'eu, ligula.'
        },
        {
            attendees: 2,
            busy: false,
            description: 'inceptos hymenaeos. Mauris ut quam vel sapien imperdiet',
            starts_at: '2022-02-07 20:52:59',
            ends_at: '2022-02-08 00:52:59',
            id: 'CCA462CA-AA99-F6A2-78C3-BA92C1A3D2EE',
            address: '460-184 Molestie Road',
            title: 'et,'
        },
        {
            attendees: 2,
            busy: false,
            description: 'vestibulum nec, euismod in, dolor. Fusce feugiat.',
            starts_at: '2022-02-08 03:27:00',
            ends_at: '2022-02-08 04:27:00',
            id: '88478B92-BF52-56EB-B8AD-8BE65CCBE89D',
            address: '1214 Libero St.',
            title: 'Morbi vehicula.'
        },
        {
            attendees: 1,
            busy: false,
            description: 'luctus felis purus ac tellus. Suspendisse',
            starts_at: '2022-02-08 04:52:23',
            ends_at: '2022-02-08 05:52:23',
            id: 'DD1EE84E-A812-9493-44CB-2A5719BACEC7',
            address: 'Ap #804-4385 Mollis Street',
            title: 'accumsan convallis,'
        },
        {
            attendees: 2,
            busy: false,
            description: 'lorem ac risus. Morbi metus. Vivamus euismod urna.',
            starts_at: '2022-02-08 11:17:59',
            ends_at: '2022-02-08 11:47:59',
            id: 'AEFE1C54-1BC8-866E-4C98-D6CB8C89B855',
            address: '620-5477 Est Ave',
            title: 'ut'
        },
        {
            attendees: 1,
            busy: false,
            description: 'In condimentum. Donec at arcu.',
            starts_at: '2022-02-08 21:20:37',
            ends_at: '2022-02-08 23:20:37',
            id: '5216A1B2-8A7F-746C-6551-236198B5E63D',
            address: '739-7772 Vestibulum Rd.',
            title: 'purus'
        },
        {
            attendees: 1,
            busy: false,
            description: 'Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum',
            starts_at: '2022-02-09 03:50:47',
            ends_at: '2022-02-09 07:50:47',
            id: '19AC621C-A7D7-2D95-9416-05AD1FF9B4A3',
            address: 'P.O. Box 924, 3552 Amet Avenue',
            title: 'purus. Maecenas'
        },
        {
            attendees: 1,
            busy: true,
            description: 'placerat velit. Quisque varius. Nam porttitor',
            starts_at: '2022-02-09 13:18:36',
            ends_at: '2022-02-09 17:18:36',
            id: '2BCC3A5E-B9E4-26A9-DFDD-4CE46ECA44B4',
            address: '477-6807 Eget Street',
            title: 'vel quam'
        },
        {
            attendees: 2,
            busy: true,
            description: 'posuere cubilia Curae Phasellus ornare. Fusce',
            starts_at: '2022-02-09 16:18:00',
            ends_at: '2022-02-09 16:48:00',
            id: '2743934D-3A25-DE66-C1DB-66C22F4AE675',
            address: 'Ap #155-7405 Pellentesque St.',
            title: 'massa non'
        },
        {
            attendees: 1,
            busy: true,
            description: 'Aenean sed pede nec ante blandit viverra. Donec',
            starts_at: '2022-02-10 10:36:22',
            ends_at: '2022-02-10 12:36:22',
            id: '95A40772-AD3D-29E6-63C5-CE7F9936D86F',
            address: 'Ap #489-9932 At, Rd.',
            title: 'ridiculus'
        },
        {
            attendees: 1,
            busy: true,
            description: 'odio. Aliquam vulputate ullamcorper magna. Sed',
            starts_at: '2022-02-10 16:56:50',
            ends_at: '2022-02-10 17:56:50',
            id: '52A9ABE4-F945-AEA3-1255-C496C7C3D29E',
            address: 'Ap #585-5058 Quisque Avenue',
            title: 'Curae'
        },
        {
            attendees: 1,
            busy: true,
            description: 'Nulla aliquet. Proin velit. Sed malesuada augue ut',
            starts_at: '2022-02-11 00:59:21',
            ends_at: '2022-02-11 02:59:21',
            id: '41B64A03-DD56-1901-5639-4F8D21E4BA44',
            address: 'Ap #752-4992 Turpis. St.',
            title: 'dictum'
        },
        {
            attendees: 1,
            busy: false,
            description: 'elit. Nulla facilisi. Sed neque. Sed eget',
            starts_at: '2022-02-14 03:18:57',
            ends_at: '2022-02-14 07:18:57',
            id: '47ABF43A-3485-B217-FD9C-09C8AE9341AD',
            address: 'Ap #244-5040 Morbi Road',
            title: 'eu eros.'
        },
        {
            attendees: 2,
            busy: true,
            description: 'nibh. Aliquam ornare, libero at auctor ullamcorper,',
            starts_at: '2022-02-14 21:35:25',
            ends_at: '2022-02-14 22:05:25',
            id: 'DBB899C2-4773-831A-CA75-939AB961C8F6',
            address: 'Ap #953-2847 Aliquet Av.',
            title: 'lorem. Donec elementum,'
        },
        {
            attendees: 2,
            busy: true,
            description: 'In lorem. Donec elementum, lorem ut aliquam',
            starts_at: '2022-02-15 22:21:31',
            ends_at: '2022-02-16 00:21:31',
            id: '9A03D390-4611-1392-EA41-E35C788DC42A',
            address: '139-4560 Nibh St.',
            title: 'malesuada'
        },
        {
            attendees: 2,
            busy: false,
            description: 'scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris',
            starts_at: '2022-02-16 13:36:51',
            ends_at: '2022-02-16 17:36:51',
            id: 'AC66472B-B7A5-9CC2-60B6-96D925124306',
            address: '7165 Augue, St.',
            title: 'massa. Vestibulum accumsan'
        },
        {
            attendees: 2,
            busy: false,
            description: 'rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed',
            starts_at: '2022-02-17 04:52:19',
            ends_at: '2022-02-17 05:52:19',
            id: '03B0B6E2-75A8-424D-BD1B-B1D1A993B23B',
            address: '2476 Ridiculus Rd.',
            title: 'ac facilisis facilisis,'
        },
        {
            attendees: 2,
            busy: false,
            description: 'dolor. Donec fringilla. Donec feugiat metus sit',
            starts_at: '2022-02-18 03:25:33',
            ends_at: '2022-02-18 07:25:33',
            id: '8CA68193-5771-4803-3B42-0704A1B577B8',
            address: 'P.O. Box 236, 7443 In Street',
            title: 'libero.'
        },
        {
            attendees: 2,
            busy: false,
            description: 'ac sem ut dolor dapibus gravida. Aliquam',
            starts_at: '2022-02-18 19:16:21',
            ends_at: '2022-02-18 19:46:21',
            id: '3C699CE6-8964-ACAA-7E73-EA9CAB381E3C',
            address: '919-6545 Iaculis St.',
            title: 'dictum.'
        },
        {
            attendees: 2,
            busy: false,
            description: 'tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.',
            starts_at: '2022-02-19 12:55:06',
            ends_at: '2022-02-19 13:55:06',
            id: '241BBAD0-1CB1-D255-02D5-1394A34C2EE7',
            address: '949-5084 Fusce St.',
            title: 'nisi'
        },
        {
            attendees: 1,
            busy: false,
            description: 'bibendum sed, est. Nunc laoreet lectus quis massa. Mauris',
            starts_at: '2022-02-19 23:51:28',
            ends_at: '2022-02-20 01:51:28',
            id: '65BC60EE-AB47-A451-7645-899B20516206',
            address: 'P.O. Box 351, 3863 At Av.',
            title: 'a odio'
        },
        {
            attendees: 2,
            busy: true,
            description: 'Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam',
            starts_at: '2022-02-20 08:46:05',
            ends_at: '2022-02-20 12:46:05',
            id: '6822036B-66AB-D850-ECA3-FC323B89ED3A',
            address: '223-7118 Tincidunt, Street',
            title: 'nec tempus'
        },
        {
            attendees: 2,
            busy: true,
            description: 'tortor. Nunc commodo auctor velit. Aliquam nisl.',
            starts_at: '2022-02-20 20:25:59',
            ends_at: '2022-02-20 20:55:59',
            id: '8532DB31-D108-29A8-8CD8-89B5028559B7',
            address: 'Ap #664-4697 Praesent Av.',
            title: 'suscipit nonummy.'
        },
        {
            attendees: 2,
            busy: true,
            description: 'mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus',
            starts_at: '2022-02-21 09:28:17',
            ends_at: '2022-02-21 11:28:17',
            id: 'CE909348-A8EC-DEBD-79BC-2BC62AE668CA',
            address: 'Ap #433-8392 Pretium Avenue',
            title: 'diam lorem,'
        },
        {
            attendees: 2,
            busy: false,
            description: 'ornare tortor at risus. Nunc ac sem ut dolor dapibus',
            starts_at: '2022-02-21 14:57:25',
            ends_at: '2022-02-21 18:57:25',
            id: 'D3E4A85B-F875-6A3F-5E69-60C4F7CCE4B1',
            address: '892-2233 Sagittis Street',
            title: 'Nunc pulvinar'
        },
        {
            attendees: 2,
            busy: false,
            description: 'nostra, per inceptos hymenaeos. Mauris ut quam',
            starts_at: '2022-02-21 22:17:28',
            ends_at: '2022-02-21 23:17:28',
            id: '6F76A987-EABD-12E2-7A93-B9E39331B1E9',
            address: 'Ap #825-3415 Suspendisse Street',
            title: 'commodo'
        },
        {
            attendees: 2,
            busy: true,
            description: 'felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam',
            starts_at: '2022-02-22 09:38:59',
            ends_at: '2022-02-22 13:38:59',
            id: 'DB790776-5361-C94B-5D41-5335D55E5180',
            address: 'P.O. Box 284, 5662 Placerat, Ave',
            title: 'Sed nunc'
        },
        {
            attendees: 1,
            busy: false,
            description: 'in, hendrerit consectetuer, cursus et, magna. Praesent',
            starts_at: '2022-02-23 08:05:19',
            ends_at: '2022-02-23 09:05:19',
            id: 'A33921C1-223B-E339-B2A8-5F51571A8F3E',
            address: '753-2736 Tempor Street',
            title: 'Curabitur ut odio'
        },
        {
            attendees: 1,
            busy: true,
            description: 'hendrerit neque. In ornare sagittis felis. Donec',
            starts_at: '2022-02-23 08:26:23',
            ends_at: '2022-02-23 12:26:23',
            id: 'E4B81963-414F-49E7-932B-215969BB6B1C',
            address: '259-2619 Aenean Av.',
            title: 'urna justo'
        },
        {
            attendees: 2,
            busy: false,
            description: 'et malesuada fames ac turpis egestas. Aliquam fringilla cursus',
            starts_at: '2022-02-23 15:16:40',
            ends_at: '2022-02-23 17:16:40',
            id: '1537370D-4112-C493-6625-D0DC9E5F8373',
            address: '4307 Mauris Av.',
            title: 'consectetuer adipiscing'
        },
        {
            attendees: 2,
            busy: true,
            description: 'justo. Praesent luctus. Curabitur egestas nunc sed libero.',
            starts_at: '2022-02-24 19:22:30',
            ends_at: '2022-02-24 21:22:30',
            id: '51381308-D5B1-CDF2-EB2B-BBD536B118F0',
            address: '896-5917 Ac St.',
            title: 'orci, consectetuer'
        },
        {
            attendees: 2,
            busy: true,
            description: 'ante, iaculis nec, eleifend non, dapibus rutrum, justo.',
            starts_at: '2022-02-26 06:47:56',
            ends_at: '2022-02-26 07:17:56',
            id: '64186816-4765-2567-2F3B-24CC559C9828',
            address: 'P.O. Box 116, 8483 Augue Ave',
            title: 'eget laoreet'
        },
        {
            attendees: 2,
            busy: true,
            description: 'dolor. Quisque tincidunt pede ac urna. Ut tincidunt',
            starts_at: '2022-02-26 09:13:21',
            ends_at: '2022-02-26 09:43:21',
            id: 'B8AA6238-2192-88A8-7268-86BCC4C0DA91',
            address: '670-2810 Phasellus Road',
            title: 'quis, pede. Praesent'
        },
        {
            attendees: 1,
            busy: false,
            description: 'lacinia mattis. Integer eu lacus. Quisque imperdiet,',
            starts_at: '2022-02-26 17:07:00',
            ends_at: '2022-02-26 21:07:00',
            id: 'E20A2BD2-1D7E-7B04-5918-46BABD734CCE',
            address: '9603 Cras Avenue',
            title: 'ac, feugiat non,'
        },
        {
            attendees: 1,
            busy: true,
            description: 'augue scelerisque mollis. Phasellus libero mauris,',
            starts_at: '2022-02-26 18:17:54',
            ends_at: '2022-02-26 19:17:54',
            id: '27BB2A67-2211-BD40-E3DC-8D5375C0DAA7',
            address: 'Ap #950-3147 Ligula Rd.',
            title: 'ultricies'
        },
        {
            attendees: 1,
            busy: false,
            description: 'vel, venenatis vel, faucibus id, libero. Donec',
            starts_at: '2022-02-27 02:22:40',
            ends_at: '2022-02-27 03:22:40',
            id: '4C654254-8A13-0BC6-778D-DB3980401527',
            address: '9752 Mi. Street',
            title: 'metus'
        },
        {
            attendees: 2,
            busy: false,
            description: 'lorem, eget mollis lectus pede et risus. Quisque libero',
            starts_at: '2022-02-27 10:04:25',
            ends_at: '2022-02-27 12:04:25',
            id: 'C57CCB1C-A9C9-7986-0A71-9A5E68187AE0',
            address: '908-3605 Quam. Rd.',
            title: 'non, lacinia at,'
        },
        {
            attendees: 2,
            busy: false,
            description: 'Integer aliquam adipiscing lacus. Ut nec',
            starts_at: '2022-02-27 12:20:13',
            ends_at: '2022-02-27 14:20:13',
            id: '53AC086C-8C59-15C5-E0C7-4BCC7A01E166',
            address: 'Ap #617-3959 Tincidunt St.',
            title: 'blandit at,'
        },
        {
            attendees: 2,
            busy: true,
            description: 'non, feugiat nec, diam. Duis mi enim, condimentum eget,',
            starts_at: '2022-02-27 20:34:48',
            ends_at: '2022-02-27 21:34:48',
            id: '6EC706F5-B7B9-208A-3125-4813621BA5B2',
            address: 'Ap #472-5619 Ac, Road',
            title: 'tristique pharetra. Quisque'
        }
    ]
})

