FROM nginx
COPY dist /usr/share/nginx/pcop_majorpm_web
COPY nginx.conf /etc/nginx/conf.d/pcop_majorpm_web.conf
