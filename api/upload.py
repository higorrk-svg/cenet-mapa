from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Aqui ficará a lógica de receber o Excel e devolver o JSON processado
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({"status": "success", "message": "Endpoint pronto para processamento"}).encode())
        return
