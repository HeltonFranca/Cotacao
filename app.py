from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import requests
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_FOLDER = os.path.join(BASE_DIR, 'static')

app = Flask(__name__, 
            static_folder=STATIC_FOLDER,  
            static_url_path='/static')  

CORS(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/consulta', methods=['GET'])
def consulta_placa():
    url = 'https://api.placafipe.com.br/getplacafipe'
    
    try:
        placa = request.args.get('placa')
        
        if not placa:
            return jsonify({'erro': 'Placa não fornecida'}), 400
        
        response = requests.post(url, json={
            'placa': placa,
            'token': 'x'
        })
        
        data = response.json()
        print("Resposta da API:", data)
        
        if data.get('codigo') == 4862:
            return jsonify({
                'erro': 'Limite atingido',
                'mensagem': data.get('msg', 'Limite diário de consultas excedido')
            }), 429  
        

        return jsonify(data)
    
    except Exception as e:
        print(f"Erro na consulta: {str(e)}")
        return jsonify({'erro': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=os.environ.get('PORT', 5000))
