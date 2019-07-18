close all; clear; clc;

%% Assign Data
huruf = 'hu';

%% Read Image
dat = sprintf('dataset/huruf/%s.bmp',huruf);
I = imread(dat);  
I = imbinarize(I, 0.9);
% figure, imshow(I)

%% Make New Folder to Bypass Permission
fpath = sprintf('dataset/huruf/%s',huruf);
mkdir(fpath)

%% Step Size 1
dist1 = 0.01;

%% Rotate from 0 to 45
for i=0:dist1:45
    
    fortyFiveDegree = imrotate(I,i); 
%     imshow(fortyFiveDegree)
    fpath = sprintf('dataset/huruf/%s/%s_45_%d.bmp',huruf,huruf,i);
    imwrite(fortyFiveDegree,fpath,'bmp')
    sprintf('Data created: %i',i)

end

%% Rotate from 315 to 360
for i=315:dist1:360
    
    fiveFortyDegree = imrotate(I,i); 
%     imshow(fiveFortyDegree)
    fpath = sprintf('dataset/huruf/%s/%s_315_%d.bmp',huruf,huruf,i);
    imwrite(fiveFortyDegree,fpath,'bmp')
    sprintf('Data created: %i',i)
    
end

%% Step Size 2
dist2 = 0.0001;

%% Projectile 1
for j=-0.001:dist2:0.000009
    for l=-0.001:dist2:0.000009

        T = [1 -1  j; 
             0  1  l;
             0  0  1];

        t_proj = projective2d(T);   
        proj1 = imwarp(I,t_proj,'FillValues',0);
%         imshow(proj1)
        fpath = sprintf('dataset/huruf/%s/%s_1_%d%d.bmp',huruf,huruf,j,l);
        imwrite(proj1,fpath,'bmp')
        sprintf('Data created: %i.%i',j,l)
        
    end
end

%% Projectile 2
for j=-0.001:dist2:0.000009
    for l=-0.001:dist2:0.000009

        T = [1 -1  j; 
             1  1  l;
             0  0  1];

        t_proj = projective2d(T);   
        proj2 = imwarp(I,t_proj,'FillValues',0);
%         imshow(proj2)
        fpath = sprintf('dataset/huruf/%s/%s_2_%d%d.bmp',huruf,huruf,j,l);
        imwrite(proj2,fpath,'bmp')
        sprintf('Data created: %i.%i',j,l)
        
    end
end

%% Projectile 3
for j=-0.001:dist2:0.000009
    for l=-0.001:dist2:0.000009

        T = [1  0  j; 
            -1  1  l;
             0  0  1];

        t_proj = projective2d(T);   
        proj3 = imwarp(I,t_proj,'FillValues',0);
%         imshow(proj3)
        fpath = sprintf('dataset/huruf/%s/%s_3_%d%d.bmp',huruf,huruf,j,l);
        imwrite(proj3,fpath,'bmp')
        sprintf('Data created: %i.%i',j,l)
        
    end
end

%% Projectile 4
for j=-0.001:dist2:0.000009
    for l=-0.001:dist2:0.000009

        T = [1  0  j; 
             1  1  l;
             0  0  1];

        t_proj = projective2d(T);   
        proj4 = imwarp(I,t_proj,'FillValues',0);
%         imshow(proj4)
        fpath = sprintf('dataset/huruf/%s/%s_4_%d%d.bmp',huruf,huruf,j,l);
        imwrite(proj4,fpath,'bmp')
        sprintf('Data created: %i.%i',j,l)
        
    end
end

%% Projectile 5
for j=-0.001:dist2:0.000009
    for l=-0.001:dist2:0.000009

        T = [1  1  j; 
            -1  1  l;
             0  0  1];

        t_proj = projective2d(T);   
        proj5 = imwarp(I,t_proj,'FillValues',0);
%         imshow(proj5)
        fpath = sprintf('dataset/huruf/%s/%s_5_%d%d.bmp',huruf,huruf,j,l);
        imwrite(proj5,fpath,'bmp')
        sprintf('Data created: %i.%i',j,l)
        
    end
end

%% Projectile 6
for j=-0.001:dist2:0.000009
    for l=-0.001:dist2:0.000009

        T = [1  1  j; 
             0  1  l;
             0  0  1];

        t_proj = projective2d(T);   
        proj6 = imwarp(I,t_proj,'FillValues',0);
%         imshow(proj6)
        fpath = sprintf('dataset/huruf/%s/%s_6_%d%d.bmp',huruf,huruf,j,l);
        imwrite(proj6,fpath,'bmp')
        sprintf('Data created: %i.%i',j,l)
        
    end
end

figure, imshow(I)
