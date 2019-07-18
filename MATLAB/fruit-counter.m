close all; clear all; clc;

%% Read RGB Image
img_rgb = imread('cherry.jpg');

%% Convert RGB to HSV
img_hsv = rgb2hsv(img_rgb);

%% Divide HSV into Three Different Channels (Hue, Saturation, Value)
h = img_hsv(:,:,1);
s = img_hsv(:,:,2);
v = img_hsv(:,:,3);

%% Assign Row & Column
[r, c] = size(h);

%% Filter Range of Pixels Allowed
for i = 1:r
    for j = 1:c
        if h(i,j) >= 0.6 && h(i,j) <= 1.00 && ...
                s(i,j) >= 0.20 && s(i,j) <= 1.0 && ...
                v(i,j) >= 0.40 && v(i,j) <= 1.0
            out(i,j) = 255;
        else
            out(i,j) = 0;
        end
    end
end

%% Create Morphological Structuring Element to Exclude Small Noise
se = strel('disk',2);

%% Morphologically Open Image
open = imopen(out,se);

%% Morphologically Close Image
closed = imclose(open,se);

%% Assign Connected components & Sum Up
[L,num] = bwlabel(closed,4)

%% Create Random Colored Mask
Lrgb = label2rgb(L, 'jet', 'w', 'shuffle');

%% Create Box with Sum of Mask
Lrgb = insertText(Lrgb, [10 10], num, 'BoxOpacity', 1, ...
    'FontSize', 18);

%% Display All Output
figure('Name','Output','NumberTitle','off','units','normalized','outerposition',[0 0 1 1])
subplot('Position',[0 0.55 0.4 0.4]), imshow(img_rgb); title('Original Image:');
subplot('Position',[0 0.1 0.4 0.4]), imshow(img_hsv), impixelinfo; title('(hover to view pixel info)')
subplot('Position',[0.4 0.85 0.1 0.1]), imshow(h); title('Hue:');
subplot('Position',[0.4 0.7 0.1 0.1]), imshow(s); title('Saturated:');
subplot('Position',[0.4 0.55 0.1 0.1]), imshow(v); title('Value:');
subplot('Position',[0.4 0.4 0.1 0.1]), imshow(open)
subplot('Position',[0.4 0.25 0.1 0.1]), imshow(closed)
for i = 1:num
    subplot('Position',[0.4 0.1 0.1 0.1]), imshow(L==i); title("Detecting: " + i + " Fruits");
    pause(1);
end
subplot('Position',[0.5 0.25 0.5 0.55]), imshow(Lrgb); title('Detected Fruits:');
hold on
himage = imshow(img_rgb);
himage.AlphaData = 0.5;
