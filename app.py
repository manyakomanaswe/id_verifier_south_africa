from flask import Flask, render_template, request
from id_verifier import verify_id
# import id_verifier 

app = Flask(__name__)

# @app.route("/")
# def verify_id_form():
#     return "hello"

# id = '8511235591086'

@app.route("/", methods=['GET'])
@app.route("/verify", methods=['GET','POST'])
def is_id_valid():
    if request.method == 'POST':
        id = request.form.get('identity')
        rest_id = request.form.get('hidden_input')

        id = rest_id + id
        
        result = verify_id(id)
        
        return render_template('index.html', result=result,id=id)
    else:
        return render_template('index.html') 
    # return render_template('index.html', result=result,id=id)

if __name__=="__main__":
    app.run(host="0.0.0.0", port=5000)
  
