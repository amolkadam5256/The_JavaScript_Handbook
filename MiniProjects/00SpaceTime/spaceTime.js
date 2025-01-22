    window.addEventListener('load', () => {
      let scene, camera, renderer, composer, controls;
      let sun, planets = [],
        starfield;
      const PLANET_COUNT = 7;
      const textureLoader = new THREE.TextureLoader();

      function createNoise2D(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const value = Math.random() * 255;
            const index = (y * width + x) * 4;
            data[index] = value;
            data[index + 1] = value;
            data[index + 2] = value;
            data[index + 3] = 255;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        return canvas;
      }

      function createRockyPlanetTexture(baseColor, type) {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        const layers = 8;
        const noiseCanvases = [];
        for (let i = 0; i < layers; i++) {
          const scale = Math.pow(2, i);
          const noiseCanvas = createNoise2D(1024 / scale, 1024 / scale);
          noiseCanvases.push(noiseCanvas);
        }
        const heightMap = new Array(1024 * 1024).fill(0);
        noiseCanvases.forEach((noiseCanvas, index) => {
          const amplitude = Math.pow(0.5, index + 1);
          const ctx2 = noiseCanvas.getContext('2d');
          const data = ctx2.getImageData(0, 0, noiseCanvas.width, noiseCanvas.height).data;
          for (let i = 0; i < heightMap.length; i++) {
            const scaledIndex = Math.floor(i * (data.length / 4) / heightMap.length) * 4;
            heightMap[i] += (data[scaledIndex] / 255) * amplitude;
          }
        });
        for (let y = 0; y < 1024; y++) {
          for (let x = 0; x < 1024; x++) {
            const height = heightMap[y * 1024 + x];
            let color;
            switch (type) {
              case 'mars':
                color = `rgb(${180 + height * 40}, ${80 + height * 30}, ${40 + height * 20})`;
                break;
              case 'mercury':
                color = `rgb(${120 + height * 50}, ${120 + height * 50}, ${120 + height * 50})`;
                break;
              default:
                const baseRGB = hexToRgb(baseColor);
                color = `rgb(${baseRGB.r + height * 50}, ${baseRGB.g + height * 50}, ${baseRGB.b + height * 50})`;
            }
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
          }
        }
        if (type === 'mars') {
          addMarsCanyons(ctx);
        } else if (type === 'mercury') {
          addMercuryCraters(ctx);
        }
        return new THREE.CanvasTexture(canvas);
      }

      function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

      function addMarsCanyons(ctx) {
        for (let i = 0; i < 15; i++) {
          const points = [];
          const startX = Math.random() * 1024;
          const startY = Math.random() * 1024;
          let x = startX;
          let y = startY;
          for (let j = 0; j < 10; j++) {
            points.push({
              x,
              y
            });
            x += (Math.random() - 0.5) * 100;
            y += (Math.random() - 0.5) * 100;
          }
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let j = 1; j < points.length; j++) {
            ctx.lineTo(points[j].x, points[j].y);
          }
          const gradient = ctx.createLinearGradient(startX, startY, points[5].x, points[5].y);
          gradient.addColorStop(0, 'rgba(139,69,19,0.9)');
          gradient.addColorStop(0.5, 'rgba(160,82,45,0.7)');
          gradient.addColorStop(1, 'rgba(139,69,19,0.5)');
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.random() * 15 + 5;
          ctx.stroke();
          ctx.strokeStyle = 'rgba(0,0,0,0.3)';
          ctx.lineWidth += 2;
          ctx.stroke();
        }
      }

      function addMercuryCraters(ctx) {
        for (let i = 0; i < 150; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 60 + 10;
          const rimGradient = ctx.createRadialGradient(
            x - radius * 0.2, y - radius * 0.2, 0,
            x, y, radius * 1.2
          );
          rimGradient.addColorStop(0, 'rgba(210,210,210,0.9)');
          rimGradient.addColorStop(0.3, 'rgba(180,180,180,0.7)');
          rimGradient.addColorStop(0.7, 'rgba(150,150,150,0.5)');
          rimGradient.addColorStop(1, 'rgba(130,130,130,0.3)');
          ctx.fillStyle = rimGradient;
          ctx.beginPath();
          ctx.arc(x, y, radius * 1.2, 0, Math.PI * 2);
          ctx.fill();
          const centerGradient = ctx.createRadialGradient(
            x, y, 0,
            x, y, radius
          );
          centerGradient.addColorStop(0, 'rgba(70,70,70,0.95)');
          centerGradient.addColorStop(0.4, 'rgba(90,90,90,0.85)');
          centerGradient.addColorStop(0.8, 'rgba(110,110,110,0.75)');
          centerGradient.addColorStop(1, 'rgba(130,130,130,0.65)');
          ctx.fillStyle = centerGradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
          const shadowGradient = ctx.createRadialGradient(
            x + radius * 0.3, y + radius * 0.3, 0,
            x + radius * 0.3, y + radius * 0.3, radius * 1.4
          );
          shadowGradient.addColorStop(0, 'rgba(40,40,40,0.8)');
          shadowGradient.addColorStop(0.5, 'rgba(40,40,40,0.5)');
          shadowGradient.addColorStop(1, 'rgba(40,40,40,0)');
          ctx.fillStyle = shadowGradient;
          ctx.beginPath();
          ctx.arc(x + radius * 0.3, y + radius * 0.3, radius * 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 600; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 12 + 3;
          const gradient = ctx.createRadialGradient(
            x - radius * 0.1, y - radius * 0.1, 0,
            x, y, radius
          );
          gradient.addColorStop(0, 'rgba(150,150,150,0.9)');
          gradient.addColorStop(0.3, 'rgba(120,120,120,0.7)');
          gradient.addColorStop(0.7, 'rgba(100,100,100,0.5)');
          gradient.addColorStop(1, 'rgba(90,90,90,0.3)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 2000; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 4 + 1;
          ctx.fillStyle = `rgba(${100 + Math.random()*50}, ${100 + Math.random()*50}, ${100 + Math.random()*50}, 0.5)`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 8000; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const size = Math.random() * 2 + 0.5;
          ctx.fillStyle = `rgba(${140 + Math.random()*30}, ${140 + Math.random()*30}, ${140 + Math.random()*30}, 0.3)`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 30; i++) {
          const startX = Math.random() * 1024;
          const startY = Math.random() * 1024;
          const length = Math.random() * 200 + 100;
          const angle = Math.random() * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          let x = startX;
          let y = startY;
          for (let j = 0; j < 8; j++) {
            x += Math.cos(angle + Math.random() * 0.8 - 0.4) * length / 8;
            y += Math.sin(angle + Math.random() * 0.8 - 0.4) * length / 8;
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'rgba(60,60,60,0.7)';
          ctx.lineWidth = Math.random() * 3 + 1;
          ctx.stroke();
          ctx.strokeStyle = 'rgba(40,40,40,0.5)';
          ctx.lineWidth += 1;
          ctx.stroke();
        }
      }

      function createVenusTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 2048;
        const ctx = canvas.getContext('2d');
        const baseGradient = ctx.createRadialGradient(1024, 1024, 0, 1024, 1024, 1024);
        baseGradient.addColorStop(0, '#daa520');
        baseGradient.addColorStop(0.3, '#d2b48c');
        baseGradient.addColorStop(0.6, '#c4a484');
        baseGradient.addColorStop(1, '#b8860b');
        ctx.fillStyle = baseGradient;
        ctx.fillRect(0, 0, 2048, 2048);
        for (let i = 0; i < 2000; i++) {
          const x = Math.random() * 2048;
          const y = Math.random() * 2048;
          const size = Math.random() * 10 + 2;
          const rockGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          rockGradient.addColorStop(0, 'rgba(210, 180, 140, 0.4)');
          rockGradient.addColorStop(1, 'rgba(184, 134, 11, 0.2)');
          ctx.fillStyle = rockGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 200; i++) {
          const x = Math.random() * 2048;
          const y = Math.random() * 2048;
          const size = Math.random() * 80 + 20;
          const rimGradient = ctx.createRadialGradient(
            x - size * 0.2, y - size * 0.2, 0,
            x, y, size * 1.2
          );
          rimGradient.addColorStop(0, 'rgba(238, 232, 170, 0.9)');
          rimGradient.addColorStop(0.3, 'rgba(218, 165, 32, 0.7)');
          rimGradient.addColorStop(0.7, 'rgba(184, 134, 11, 0.5)');
          rimGradient.addColorStop(1, 'rgba(139, 69, 19, 0.3)');
          ctx.fillStyle = rimGradient;
          ctx.beginPath();
          ctx.arc(x, y, size * 1.2, 0, Math.PI * 2);
          ctx.fill();
          const craterGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          craterGradient.addColorStop(0, 'rgba(160, 82, 45, 0.95)');
          craterGradient.addColorStop(0.4, 'rgba(184, 134, 11, 0.85)');
          craterGradient.addColorStop(0.8, 'rgba(205, 133, 63, 0.75)');
          craterGradient.addColorStop(1, 'rgba(210, 180, 140, 0.65)');
          ctx.fillStyle = craterGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          const shadowGradient = ctx.createRadialGradient(
            x + size * 0.3, y + size * 0.3, 0,
            x + size * 0.3, y + size * 0.3, size * 1.4
          );
          shadowGradient.addColorStop(0, 'rgba(101, 67, 33, 0.8)');
          shadowGradient.addColorStop(0.5, 'rgba(101, 67, 33, 0.5)');
          shadowGradient.addColorStop(1, 'rgba(101, 67, 33, 0)');
          ctx.fillStyle = shadowGradient;
          ctx.beginPath();
          ctx.arc(x + size * 0.3, y + size * 0.3, size * 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 1000; i++) {
          const x = Math.random() * 2048;
          const y = Math.random() * 2048;
          const size = Math.random() * 15 + 5;
          const smallCraterGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          smallCraterGradient.addColorStop(0, 'rgba(210, 180, 140, 0.9)');
          smallCraterGradient.addColorStop(0.5, 'rgba(184, 134, 11, 0.7)');
          smallCraterGradient.addColorStop(1, 'rgba(139, 69, 19, 0.5)');
          ctx.fillStyle = smallCraterGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 50; i++) {
          const startX = Math.random() * 2048;
          const startY = Math.random() * 2048;
          const length = Math.random() * 300 + 100;
          const angle = Math.random() * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          let x = startX;
          let y = startY;
          for (let j = 0; j < 10; j++) {
            x += Math.cos(angle + Math.random() * 0.8 - 0.4) * length / 10;
            y += Math.sin(angle + Math.random() * 0.8 - 0.4) * length / 10;
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'rgba(139, 69, 19, 0.3)';
          ctx.lineWidth = Math.random() * 4 + 1;
          ctx.stroke();
        }
        const atmosphereGradient = ctx.createRadialGradient(1024, 1024, 0, 1024, 1024, 1448);
        atmosphereGradient.addColorStop(0, 'rgba(218, 165, 32, 0)');
        atmosphereGradient.addColorStop(0.7, 'rgba(218, 165, 32, 0.1)');
        atmosphereGradient.addColorStop(1, 'rgba(184, 134, 11, 0.2)');
        ctx.fillStyle = atmosphereGradient;
        ctx.fillRect(0, 0, 2048, 2048);
        return new THREE.CanvasTexture(canvas);
      }

      function createEarthTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 2048;
        const ctx = canvas.getContext('2d');
        const oceanGradient = ctx.createLinearGradient(0, 0, 0, 2048);
        oceanGradient.addColorStop(0, '#001832');
        oceanGradient.addColorStop(0.3, '#002850');
        oceanGradient.addColorStop(0.5, '#003264');
        oceanGradient.addColorStop(0.7, '#002850');
        oceanGradient.addColorStop(1, '#001832');
        ctx.fillStyle = oceanGradient;
        ctx.fillRect(0, 0, 2048, 2048);
        const continents = [];
        const continentCount = 7;
        for (let i = 0; i < continentCount; i++) {
          const centerX = Math.random() * 2048;
          const centerY = Math.random() * 2048;
          const points = [];
          for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
            const baseRadius = Math.random() * 300 + 200;
            const noise = (
              Math.sin(angle * 5) * 80 +
              Math.cos(angle * 3) * 60 +
              Math.sin(angle * 8) * 40 +
              Math.cos(angle * 12) * 20
            );
            points.push({
              x: centerX + Math.cos(angle) * (baseRadius + noise),
              y: centerY + Math.sin(angle) * (baseRadius + noise)
            });
          }
          continents.push(points);
        }
        continents.forEach(points => {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length - 2; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
          }
          ctx.closePath();
          const terrainGradient = ctx.createRadialGradient(
            points[0].x, points[0].y, 0,
            points[0].x, points[0].y, 400
          );
          terrainGradient.addColorStop(0, '#0d3307');
          terrainGradient.addColorStop(0.2, '#1b4f15');
          terrainGradient.addColorStop(0.4, '#2d5a27');
          terrainGradient.addColorStop(0.5, '#437c3c');
          terrainGradient.addColorStop(0.6, '#876f44');
          terrainGradient.addColorStop(0.8, '#9e8555');
          terrainGradient.addColorStop(0.9, '#7d745e');
          terrainGradient.addColorStop(1, '#ffffff');
          ctx.fillStyle = terrainGradient;
          ctx.fill();
          const detailGradient = ctx.createLinearGradient(
            points[0].x - 300, points[0].y - 300,
            points[0].x + 300, points[0].y + 300
          );
          detailGradient.addColorStop(0, 'rgba(255,255,255,0.1)');
          detailGradient.addColorStop(0.3, 'rgba(0,0,0,0.1)');
          detailGradient.addColorStop(0.7, 'rgba(255,255,255,0.1)');
          detailGradient.addColorStop(1, 'rgba(0,0,0,0.1)');
          ctx.fillStyle = detailGradient;
          ctx.fill();
        });
        const northPole = ctx.createRadialGradient(1024, 0, 0, 1024, 0, 800);
        northPole.addColorStop(0, 'rgba(255,255,255,0.95)');
        northPole.addColorStop(0.4, 'rgba(220,230,255,0.7)');
        northPole.addColorStop(0.7, 'rgba(200,210,255,0.4)');
        northPole.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = northPole;
        ctx.fillRect(0, 0, 2048, 2048);
        const southPole = ctx.createRadialGradient(1024, 2048, 0, 1024, 2048, 800);
        southPole.addColorStop(0, 'rgba(255,255,255,0.95)');
        southPole.addColorStop(0.4, 'rgba(220,230,255,0.7)');
        southPole.addColorStop(0.7, 'rgba(200,210,255,0.4)');
        southPole.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = southPole;
        ctx.fillRect(0, 0, 2048, 2048);
        for (let i = 0; i < 80; i++) {
          const x = Math.random() * 2048;
          const y = Math.random() * 2048;
          const size = Math.random() * 300 + 100;
          const cloudGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          cloudGradient.addColorStop(0, 'rgba(255,255,255,0.4)');
          cloudGradient.addColorStop(0.4, 'rgba(255,255,255,0.2)');
          cloudGradient.addColorStop(0.7, 'rgba(255,255,255,0.1)');
          cloudGradient.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = cloudGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
      }

      function createMoonTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#808080';
        ctx.fillRect(0, 0, 1024, 1024);
        for (let i = 0; i < 200; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 20 + 5;
          const gradient = ctx.createRadialGradient(
            x - radius * 0.2, y - radius * 0.2, 0,
            x, y, radius
          );
          gradient.addColorStop(0, '#a0a0a0');
          gradient.addColorStop(0.8, '#707070');
          gradient.addColorStop(1, '#606060');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
      }

      function createGasGiantTexture(baseColor) {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        const rgb = hexToRgb(baseColor);
        ctx.fillStyle = baseColor;
        ctx.fillRect(0, 0, 1024, 1024);
        for (let y = 0; y < 1024; y++) {
          const noise = Math.sin(y * 0.05) * 0.5 + 0.5;
          const bandColor = `rgba(${rgb.r * noise}, ${rgb.g * noise}, ${rgb.b * noise}, 0.5)`;
          ctx.fillStyle = bandColor;
          ctx.fillRect(0, y, 1024, 1);
        }
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const size = Math.random() * 100 + 50;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          gradient.addColorStop(0, `rgba(${rgb.r + 50}, ${rgb.g + 50}, ${rgb.b + 50}, 0.6)`);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
      }

      function createPlanetRings(innerRadius, outerRadius) {
        const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 128, 8); // Increased resolution
        const material = new THREE.MeshStandardMaterial({
          color: 0xA88B5E,
          transparent: true,
          opacity: 0.9,
          side: THREE.DoubleSide,
          roughness: 0.6,
          metalness: 0.4,
          vertexColors: true
        });
        // Add variation of colors for the rings
        const colors = new Float32Array(geometry.attributes.position.count * 3);
        const color = new THREE.Color();
        for (let i = 0; i < geometry.attributes.position.count; i++) {
          const noise = Math.random() * 0.2 + 0.8;
          color.setHSL(0.08 + Math.random() * 0.02, 0.5, 0.4 + Math.random() * 0.2);
          colors[i * 3] = color.r * noise;
          colors[i * 3 + 1] = color.g * noise;
          colors[i * 3 + 2] = color.b * noise;
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const positions = geometry.attributes.position.array;
        const vertex = new THREE.Vector3();
        for (let i = 0; i < positions.length; i += 3) {
          vertex.x = positions[i];
          vertex.y = positions[i + 1];
          vertex.z = positions[i + 2];
          const distance = vertex.length();
          const noise = Math.sin(distance * 0.2) * 0.15 +
            Math.cos(distance * 0.15) * 0.1;
          vertex.z += noise;
          positions[i] = vertex.x;
          positions[i + 1] = vertex.y;
          positions[i + 2] = vertex.z;
        }
        return new THREE.Mesh(geometry, material);
      }

      function createSunTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        const baseGradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
        baseGradient.addColorStop(0, '#ffffff');
        baseGradient.addColorStop(0.2, '#ffdd00');
        baseGradient.addColorStop(0.4, '#ff8800');
        baseGradient.addColorStop(0.6, '#ff4400');
        baseGradient.addColorStop(0.8, '#ff2200');
        baseGradient.addColorStop(1, '#dd1100');
        ctx.fillStyle = baseGradient;
        ctx.fillRect(0, 0, 1024, 1024);
        for (let i = 0; i < 40; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const size = Math.random() * 400 + 200;
          const flareGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          flareGradient.addColorStop(0, 'rgba(255,255,220,0.9)');
          flareGradient.addColorStop(0.2, 'rgba(255,200,50,0.7)');
          flareGradient.addColorStop(0.5, 'rgba(255,100,0,0.5)');
          flareGradient.addColorStop(1, 'rgba(255,50,0,0)');
          ctx.fillStyle = flareGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 8000; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const size = Math.random() * 15 + 8;
          const granuleGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          granuleGradient.addColorStop(0, 'rgba(255,255,200,0.4)');
          granuleGradient.addColorStop(0.5, 'rgba(255,200,50,0.3)');
          granuleGradient.addColorStop(1, 'rgba(255,100,0,0)');
          ctx.fillStyle = granuleGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 12; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const size = Math.random() * 60 + 30;
          const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          spotGradient.addColorStop(0, 'rgba(50,0,0,0.9)');
          spotGradient.addColorStop(0.3, 'rgba(100,20,0,0.7)');
          spotGradient.addColorStop(1, 'rgba(200,50,0,0)');
          ctx.fillStyle = spotGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        const coronaGradient = ctx.createRadialGradient(512, 512, 350, 512, 512, 512);
        coronaGradient.addColorStop(0, 'rgba(255,200,100,0)');
        coronaGradient.addColorStop(0.6, 'rgba(255,150,50,0.3)');
        coronaGradient.addColorStop(0.8, 'rgba(255,100,0,0.4)');
        coronaGradient.addColorStop(1, 'rgba(255,50,0,0.5)');
        ctx.fillStyle = coronaGradient;
        ctx.fillRect(0, 0, 1024, 1024);
        return new THREE.CanvasTexture(canvas);
      }

      function createStarfield() {
        const geometry = new THREE.SphereGeometry(400, 32, 32);
        const starfieldTexture = createStarfieldTexture();
        const material = new THREE.MeshBasicMaterial({
          map: starfieldTexture,
          side: THREE.BackSide,
          transparent: true
        });
        return new THREE.Mesh(geometry, material);
      }

      function createStarfieldTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 2048;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10000; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const radius = Math.random() * 1.5;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
          const hue = Math.random() * 60 - 30;
          const saturation = Math.random() * 20;
          const brightness = 80 + Math.random() * 20;
          gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${brightness}%, 1)`);
          gradient.addColorStop(0.1, `hsla(${hue}, ${saturation}%, ${brightness}%, 0.8)`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const radius = 1.5 + Math.random() * 2;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
          gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
          gradient.addColorStop(0.5, 'rgba(128, 128, 255, 0.2)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const radius = 100 + Math.random() * 200;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
          const hue = Math.random() * 360;
          gradient.addColorStop(0, `hsla(${hue}, 50%, 30%, 0.1)`);
          gradient.addColorStop(0.5, `hsla(${hue}, 40%, 20%, 0.05)`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
      }

      function createDetailedMoonTexture(baseColor) {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        // Base color
        ctx.fillStyle = baseColor;
        ctx.fillRect(0, 0, 1024, 1024);
        // Add large craters
        for (let i = 0; i < 120; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 40 + 15;
          const rimGradient = ctx.createRadialGradient(
            x - radius * 0.2, y - radius * 0.2, 0,
            x, y, radius * 1.2
          );
          rimGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
          rimGradient.addColorStop(0.3, 'rgba(200, 200, 200, 0.6)');
          rimGradient.addColorStop(0.7, 'rgba(150, 150, 150, 0.4)');
          rimGradient.addColorStop(1, 'rgba(100, 100, 100, 0.2)');
          ctx.fillStyle = rimGradient;
          ctx.beginPath();
          ctx.arc(x, y, radius * 1.2, 0, Math.PI * 2);
          ctx.fill();
          const centerGradient = ctx.createRadialGradient(
            x, y, 0,
            x, y, radius
          );
          centerGradient.addColorStop(0, 'rgba(60, 60, 60, 0.95)');
          centerGradient.addColorStop(0.4, 'rgba(80, 80, 80, 0.85)');
          centerGradient.addColorStop(0.8, 'rgba(100, 100, 100, 0.75)');
          centerGradient.addColorStop(1, 'rgba(120, 120, 120, 0.65)');
          ctx.fillStyle = centerGradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
          // Add crater shadows
          const shadowGradient = ctx.createRadialGradient(
            x + radius * 0.3, y + radius * 0.3, 0,
            x + radius * 0.3, y + radius * 0.3, radius * 1.4
          );
          shadowGradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
          shadowGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.4)');
          shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = shadowGradient;
          ctx.beginPath();
          ctx.arc(x + radius * 0.3, y + radius * 0.3, radius * 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
        // Add medium craters
        for (let i = 0; i < 400; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 10 + 5;
          const gradient = ctx.createRadialGradient(
            x - radius * 0.1, y - radius * 0.1, 0,
            x, y, radius
          );
          gradient.addColorStop(0, 'rgba(180, 180, 180, 0.8)');
          gradient.addColorStop(0.3, 'rgba(140, 140, 140, 0.6)');
          gradient.addColorStop(0.7, 'rgba(100, 100, 100, 0.4)');
          gradient.addColorStop(1, 'rgba(80, 80, 80, 0.2)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        // Add surface details and small craters
        for (let i = 0; i < 2000; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 3 + 1;
          ctx.fillStyle = `rgba(${120 + Math.random()*40}, ${120 + Math.random()*40}, ${120 + Math.random()*40}, 0.4)`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        // Add highland regions
        for (let i = 0; i < 15; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const radius = Math.random() * 200 + 100;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
          gradient.addColorStop(0.5, 'rgba(200, 200, 200, 0.1)');
          gradient.addColorStop(1, 'rgba(150, 150, 150, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
      }

      function init() {
        scene = new THREE.Scene();
        starfield = createStarfield();
        scene.add(starfield);
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;
        renderer = new THREE.WebGLRenderer({
          antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
        const sunTexture = createSunTexture();
        const sunMaterial = new THREE.MeshBasicMaterial({
          map: sunTexture,
          emissive: 0xff5500,
          emissiveIntensity: 1.5
        });
        sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);
        const sunLight = new THREE.PointLight(0xffaa44, 2.5, 150);
        sun.add(sunLight);
        const planetConfigs = [{
            type: 'rocky',
            subtype: 'mercury',
            color: '#8B4513',
            size: 1.2
          },
          {
            type: 'rocky',
            subtype: 'venus',
            color: '#FFA54F',
            size: 1.8,
            hasAtmosphere: true
          },
          {
            type: 'rocky',
            subtype: 'earth',
            color: '#4169E1',
            size: 3.0,
            hasAtmosphere: true
          },
          {
            type: 'rocky',
            subtype: 'mars',
            color: '#CD853F',
            size: 1.5
          },
          {
            type: 'gas',
            color: '#DEB887',
            size: 4.0,
            hasRings: true
          },
          {
            type: 'gas',
            color: '#DAA520',
            size: 2.3
          },
          {
            type: 'gas',
            color: '#B8860B',
            size: 2.4,
            hasMoons: true
          }
        ];
        for (let i = 0; i < PLANET_COUNT; i++) {
          const config = planetConfigs[i];
          const distance = i === 0 ? 8 : (12 + (Math.pow(i + 1, 1.8) * 6));
          const speed = 0.002 / Math.sqrt(distance);
          const planetGeometry = new THREE.SphereGeometry(config.size, 32, 32);
          let planetTexture;
          if (i === 2) {
            planetTexture = createEarthTexture();
          } else if (i === 1) {
            planetTexture = createVenusTexture();
          } else {
            planetTexture = config.type === 'rocky' ?
              createRockyPlanetTexture(config.color, config.subtype) :
              createGasGiantTexture(config.color);
          }
          const planetMaterial = new THREE.MeshStandardMaterial({
            map: planetTexture,
            roughness: config.type === 'rocky' ? 0.8 : 0.4,
            metalness: config.type === 'rocky' ? 0.2 : 0.0
          });
          const planet = new THREE.Mesh(planetGeometry, planetMaterial);
          planet.position.x = distance;
          planet.userData = {
            orbitRadius: distance,
            orbitSpeed: speed,
            angle: Math.random() * Math.PI * 2
          };
          if (i === 1) {
            const moonSize = config.size * 0.2;
            const moonDistance = config.size * 2;
            const moonGeometry = new THREE.SphereGeometry(moonSize, 32, 32);
            const moonTexture = createMoonTexture();
            const moonMaterial = new THREE.MeshStandardMaterial({
              map: moonTexture,
              roughness: 0.8,
              metalness: 0.2
            });
            const moonPivot = new THREE.Object3D();
            planet.add(moonPivot);
            const moon = new THREE.Mesh(moonGeometry, moonMaterial);
            moon.position.x = moonDistance;
            moonPivot.add(moon);
          }
          if (i === 4) {
            const rings = createPlanetRings(config.size * 1.5, config.size * 2.2);
            rings.rotation.x = Math.PI / 3;
            planet.add(rings);
            const moonConfigs = [{
                size: 0.4,
                distance: config.size * 2.4,
                speed: 0.023,
                color: '#A89B8C'
              },
              {
                size: 0.3,
                distance: config.size * 2.6,
                speed: 0.011,
                color: '#9A8B7C'
              },
              {
                size: 0.5,
                distance: config.size * 2.8,
                speed: 0.017,
                color: '#B8A89C'
              },
              {
                size: 0.35,
                distance: config.size * 3.0,
                speed: 0.008,
                color: '#C8B8AC'
              }
            ];
            planet.userData.moons = [];
            moonConfigs.forEach((moonConfig, index) => {
              const moonPivot = new THREE.Object3D();
              planet.add(moonPivot);
              const moonGeometry = new THREE.SphereGeometry(moonConfig.size, 32, 32);
              let moonTexture;
              // Two icy moons and one with atmosphere
              if (index === 0 || index === 2) {
                moonTexture = createIcyMoonTexture();
              } else {
                moonTexture = createDetailedMoonTexture(moonConfig.color);
              }
              const moonMaterial = new THREE.MeshStandardMaterial({
                map: moonTexture,
                roughness: index === 0 || index === 2 ? 0.4 : 0.8,
                metalness: index === 0 || index === 2 ? 0.3 : 0.2
              });
              const moon = new THREE.Mesh(moonGeometry, moonMaterial);
              moon.position.x = moonConfig.distance;
              moonPivot.rotation.x = (Math.random() - 0.5) * 0.4;
              moonPivot.rotation.z = (Math.random() - 0.5) * 0.4;
              moonPivot.add(moon);
              // Add atmosphere to the first moon
              if (index === 0) {
                const atmosphereGeometry = new THREE.SphereGeometry(moonConfig.size * 1.1, 32, 32);
                const atmosphereMaterial = new THREE.MeshPhongMaterial({
                  color: 0xadd8e6,
                  transparent: true,
                  opacity: 0.2,
                  side: THREE.DoubleSide
                });
                const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
                moon.add(atmosphere);
              }
              planet.userData.moons.push({
                pivot: moonPivot,
                orbitSpeed: moonConfig.speed
              });
            });
          }
          if (i === 2) {
            const atmosphereGeometry = new THREE.SphereGeometry(config.size * 1.05, 32, 32);
            const atmosphereMaterial = new THREE.MeshPhongMaterial({
              color: 0x8faeff,
              transparent: true,
              opacity: 0.3,
              side: THREE.DoubleSide
            });
            const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
            planet.add(atmosphere);
          }
          if (i === 6) {
            const moon1Size = config.size * 0.15;
            const moon1Distance = config.size * 3;
            const moon1Geometry = new THREE.SphereGeometry(moon1Size, 32, 32);
            const moon1Texture = createMoonTexture();
            const moon1Material = new THREE.MeshStandardMaterial({
              map: moon1Texture,
              roughness: 0.8,
              metalness: 0.2
            });
            const moon1Pivot = new THREE.Object3D();
            planet.add(moon1Pivot);
            const moon1 = new THREE.Mesh(moon1Geometry, moon1Material);
            moon1.position.x = moon1Distance;
            moon1Pivot.add(moon1);
            const moon2Size = config.size * 0.12;
            const moon2Distance = config.size * 4;
            const moon2Geometry = new THREE.SphereGeometry(moon2Size, 32, 32);
            const moon2Texture = createMoonTexture();
            const moon2Material = new THREE.MeshStandardMaterial({
              map: moon2Texture,
              roughness: 0.8,
              metalness: 0.2
            });
            const moon2Pivot = new THREE.Object3D();
            planet.add(moon2Pivot);
            const moon2 = new THREE.Mesh(moon2Geometry, moon2Material);
            moon2.position.x = moon2Distance;
            moon2Pivot.add(moon2);
            planet.userData.moons = [{
                pivot: moon1Pivot,
                orbitSpeed: 0.015
              },
              {
                pivot: moon2Pivot,
                orbitSpeed: 0.008
              }
            ];
          }
          planets.push(planet);
          scene.add(planet);
        }
        const bloomPass = new THREE.UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          1.5,
          0.4,
          0.85
        );
        composer = new THREE.EffectComposer(renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));
        composer.addPass(bloomPass);
        window.addEventListener('resize', onWindowResize, false);
      }

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      }

      function animate() {
        requestAnimationFrame(animate);
        starfield.rotation.y += 0.0001;
        sun.rotation.y += 0.005;
        planets.forEach(planet => {
          planet.userData.angle += planet.userData.orbitSpeed;
          planet.position.x = Math.cos(planet.userData.angle) * planet.userData.orbitRadius;
          planet.position.z = Math.sin(planet.userData.angle) * planet.userData.orbitRadius;
          planet.rotation.y += 0.02;
          if (planet.userData.moon) {
            planet.userData.moon.pivot.rotation.y += planet.userData.moon.orbitSpeed;
          }
          if (planet.userData.moons) {
            planet.userData.moons.forEach(moon => {
              moon.pivot.rotation.y += moon.orbitSpeed;
            });
          }
        });
        controls.update();
        composer.render();
      }

      function createIcyMoonTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        // Base ice color
        ctx.fillStyle = '#E0FFFF';
        ctx.fillRect(0, 0, 1024, 1024);
        // Cracks and crevasses
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const length = Math.random() * 200 + 50;
          const angle = Math.random() * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          let currentX = x;
          let currentY = y;
          for (let j = 0; j < 6; j++) {
            currentX += Math.cos(angle + Math.random() * 0.8 - 0.4) * length / 6;
            currentY += Math.sin(angle + Math.random() * 0.8 - 0.4) * length / 6;
            ctx.lineTo(currentX, currentY);
          }
          const gradient = ctx.createLinearGradient(x, y, currentX, currentY);
          gradient.addColorStop(0, 'rgba(150, 200, 255, 0.8)');
          gradient.addColorStop(0.5, 'rgba(100, 150, 255, 0.6)');
          gradient.addColorStop(1, 'rgba(50, 100, 255, 0.4)');
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.random() * 3 + 1;
          ctx.stroke();
        }
        // Ice blocks and ridges
        for (let i = 0; i < 300; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 1024;
          const size = Math.random() * 40 + 10;
          const gradient = ctx.createRadialGradient(
            x - size * 0.2, y - size * 0.2, 0,
            x, y, size
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          gradient.addColorStop(0.5, 'rgba(200, 220, 255, 0.7)');
          gradient.addColorStop(1, 'rgba(150, 200, 255, 0.5)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
      }
      init();
      animate();
    });