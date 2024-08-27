theta = linspace(0,2*pi,100)';
r1 = 5;
r2 = 0.2;
r3 = 0.3;
n = 4;
vs = spine(theta,r1,r2,r3,n);
vc = circle(theta,r1);

e = 0.001;
vo = (-spine(theta,r1,r2,r3,n)+spine(theta+e,r1,r2,r3,n))/e;
figure
plot3(vo(:,1),vo(:,2),vo(:,3))

function vs = spine(theta,r1,r2,r3,n)
r = r2+r3;    
x = (1+r*cos(n*theta)).*cos(theta)*r1;
y = (1+r*cos(n*theta)).*sin(theta)*r1;
z = r*sin(n*theta)*r1;
vs = [x,y,z];
figure
plot3(x,y,z)
end

function vs = circle(theta,r1)   
x = cos(theta)*r1;
y = sin(theta)*r1;
z = 0*theta;
vs = [x,y,z];
end
