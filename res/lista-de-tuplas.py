def main():
    # Pego o input do NEPS e armazeno em nElementos já transformado em inteiro
    nElementos = int (input())
    # Mostro na tela o resultado de resolveLista
    print(resolveLista(nElementos))


# Assinatura: resolveLista(inteiro n de elemtos)
# crio um array para colocar as frases passadas como input
# crio um array para armazenar as tuplas chamado de respota
def resolveLista(nelementos):
    elementos = []
    resposta = []
    # para cada elemento
    for i in range(nelementos):
        # pego a frase
        linha = input()
        # separo por espaço e coloco no vetor elementos
        elementos = linha.split(" ")

        # adiciono uma tupla no vetor resposta
        resposta.append((elementos[0],elementos[1].rstrip('\n')))

    return resposta


if __name__ == "__main__":
    main()
