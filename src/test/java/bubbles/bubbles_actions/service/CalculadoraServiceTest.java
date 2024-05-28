package bubbles.bubbles_actions.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class CalculadoraServiceTest {
    @Test
    @DisplayName("Quando acionado com 10 a 2, então deve retornar 5")
    public void testDividir() {
        CalculadoraService calculadoraService = new CalculadoraService();
        double a = 10;
        double b = 2;
        double esperado = 5;

        double resultado = calculadoraService.dividir(a, b);

        Assertions.assertEquals(esperado, resultado);
    }
}
