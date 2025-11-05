function convert() {
        const input = parseFloat(document.getElementById('userInput').value);
        const unit = document.getElementById('unit').value;
        const result = document.getElementById('resultElement');
        
        if (isNaN(input)) {
          result.textContent = '0';
          return;
        }
        
        let converted;
        if (unit === 'milesToKm') {
          converted = (input * 1.60934).toFixed(3);
        } else {
          converted = (input / 1.60934).toFixed(2);
        }
        
        result.textContent = converted;
      }
      
      // Convert on Enter key
      document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          convert();
        }
      });