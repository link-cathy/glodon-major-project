/**
 * Created by yuanxh on 2018/7/10.
 */
import messages from 'utils/i18n'
const router_config = {
    leftNavBar: [
        { name: messages.leftNavBar.cockpit, url: '/cockpit' },
        { name: messages.leftNavBar.labors, url: '/labors' },
        { name: messages.leftNavBar.process, url: '/process' },
    ],
    rightNavBar: [
        { name: messages.rightNavBar.quality, url: '/quality' },
        { name: messages.rightNavBar.safety, url: '/safety' },
        { name: messages.rightNavBar.surveillance, url: '/surveillance' },
        // { name: messages.rightNavBar.cooperation, url: '/cooperation' }
    ],
    router: [
        { url: '/cockpit', component: 'Cockpit', path: '../pages/cockpit' },
        { url: '/process', component: 'Process', path: '../pages/process' },
        { url: '/labors', component: 'Labors', path: '../pages/labors' },
        { url: '/quality', component: 'Quality', path: '../pages/quality' },
        { url: '/safety', component: 'Safety', path: '../pages/safety' },
        { url: '/surveillance', component: 'Surveillance', path: '../pages/surveillance' },
        { url: '/cooperation', component: 'Cooperation', path: '../pages/cooperation' }
    ]
}

export default router_config;