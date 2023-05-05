import os

name = input ("Enter file name: ")

if not os.path.exists('res'):
    os.makedirs('res')

if not os.path.exists('testes'):
    os.makedirs('testes')

res_file_path = os.path.join('res',f"{name}.py");
testes_file_path = os.path.join('testes',f"{name}.txt");

if not os.path.exists(res_file_path):
    with open(res_file_path,'w') as f:
        text = """\
        def main():
            # Seu código vai aqui

        if __name__ == "__main__":
            main()
        """
        f.write(text)
    print(f"Foi criado {res_file_path}")
else:
    print(f"O arquivo já existe: {res_file_path}")

if not os.path.exists(testes_file_path):
    with open(testes_file_path,'w') as f:
        print(f"Foi criado {testes_file_path}")
        pass
else:
    print(f"O arquivo já existe: {testes_file_path}")
