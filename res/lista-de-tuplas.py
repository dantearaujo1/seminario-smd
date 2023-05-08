# import os

def main():
    # f = open(os.path.realpath('..') + "/testes/lista-de-tuplas.txt","r")
    # nElementos = int (f.readline())
    nElementos = int (input())
    elementos = []
    resposta = []
    for i in range(nElementos):
        # linha = f.readline()
        linha = input()
        elementos = linha.split(" ")
        resposta.append((elementos[0],elementos[1].rstrip('\n')))
    print(resposta)


if __name__ == "__main__":
    main()
